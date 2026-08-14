import { appendVaryAccept } from "@/lib/markdown/accept";
import { estimateMarkdownTokens, getMarkdownPage } from "@/lib/markdown/pages";

export function markdownResponse(pathname: string): Response {
  const page = getMarkdownPage(pathname);
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    "x-markdown-tokens": String(estimateMarkdownTokens(page.body)),
  });
  appendVaryAccept(headers);

  return new Response(page.body, {
    status: page.status,
    headers,
  });
}
