type AcceptEntry = {
  type: string;
  q: number;
  specificity: number;
  position: number;
};

type MediaScore = {
  q: number;
  specificity: number;
  position: number;
};

const UNMATCHED: MediaScore = { q: -1, specificity: -1, position: Number.POSITIVE_INFINITY };

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((raw, position) => {
      const parts = raw.trim().split(";").map((part) => part.trim());
      const type = parts[0]?.toLowerCase() ?? "";
      if (!type) {
        return null;
      }

      let q = 1;
      for (const param of parts.slice(1)) {
        const [name, value] = param.split("=").map((part) => part.trim());
        if (name === "q") {
          const parsed = Number(value);
          if (!Number.isNaN(parsed)) {
            q = Math.max(0, Math.min(1, parsed));
          }
        }
      }

      const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
      return { type, q, specificity, position };
    })
    .filter((entry): entry is AcceptEntry => entry !== null);
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") {
    return true;
  }
  if (entry.type.endsWith("/*")) {
    return candidate.startsWith(entry.type.slice(0, -1));
  }
  return entry.type === candidate;
}

function scoreType(entries: AcceptEntry[], candidate: string): MediaScore {
  let matched: AcceptEntry | null = null;

  for (const entry of entries) {
    if (!matches(entry, candidate)) {
      continue;
    }
    if (
      matched === null ||
      entry.specificity > matched.specificity ||
      (entry.specificity === matched.specificity && entry.position < matched.position)
    ) {
      matched = entry;
    }
  }

  if (!matched || matched.q <= 0) {
    return UNMATCHED;
  }

  return { q: matched.q, specificity: matched.specificity, position: matched.position };
}

/**
 * Cloudflare Markdown for Agents negotiation:
 * - Accept text/markdown → markdown
 * - Accept text/markdown plus a lower-q text/html → markdown
 * - Accept text/* → markdown
 * - Accept star/star or missing → HTML
 *
 * Next.js RSC (Accept text/x-component) stays on HTML.
 */
export function wantsMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader?.trim()) {
    return false;
  }

  const entries = parseAccept(acceptHeader);
  if (entries.length === 0) {
    return false;
  }

  const markdown = scoreType(entries, "text/markdown");
  const html = scoreType(entries, "text/html");

  if (markdown.q < 0) {
    return false;
  }

  if (html.q < 0) {
    return true;
  }

  if (markdown.specificity === 0 && html.specificity === 0) {
    return false;
  }

  if (markdown.q !== html.q) {
    return markdown.q > html.q;
  }

  if (markdown.specificity !== html.specificity) {
    return markdown.specificity > html.specificity;
  }

  if (markdown.specificity === 1) {
    return true;
  }

  return markdown.position < html.position;
}

export function appendVaryAccept(headers: Headers): void {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", "Accept");
    return;
  }

  const tokens = existing.split(",").map((token) => token.trim().toLowerCase());
  if (!tokens.includes("accept")) {
    headers.set("Vary", `${existing}, Accept`);
  }
}
