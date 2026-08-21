import { describe, expect, it } from "vitest";

import { estimateMarkdownTokens, getMarkdownPage } from "@/lib/markdown/pages";
import { isMarkdownDocumentPath } from "@/lib/markdown/paths";
import { markdownResponse } from "@/lib/markdown/response";

describe("getMarkdownPage", () => {
  it("returns the home document with frontmatter, body, and JSON-LD", () => {
    const page = getMarkdownPage("/");
    expect(page.status).toBe(200);
    expect(page.body).toContain("title: \"First Artifact: Private club for the top 1% building with AI\"");
    expect(page.body).toContain("# obsess");
    expect(page.body).toContain("Aryan Iyappan");
    expect(page.body).toContain("https://forms.gle/FGJtVdbWxTLgVsKA9");
    expect(page.body).toContain("```json");
    expect(page.body).toContain('"Organization"');
    expect(page.body).toContain('"Club"');
  });

  it("returns about, privacy, and terms documents", () => {
    expect(getMarkdownPage("/about").body).toContain("# what this is");
    expect(getMarkdownPage("/privacy").body).toContain("# Privacy policy");
    expect(getMarkdownPage("/terms").body).toContain("# Terms of use");
    expect(getMarkdownPage("/about/").status).toBe(200);
  });

  it("returns a markdown 404 for unknown paths", () => {
    const page = getMarkdownPage("/does-not-exist");
    expect(page.status).toBe(404);
    expect(page.body).toContain("# Page not found");
  });
});

describe("markdownResponse", () => {
  it("sets markdown content type, vary, and token count headers", async () => {
    const response = markdownResponse("/");
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("text/markdown; charset=utf-8");
    expect(response.headers.get("Vary")).toBe("Accept");
    const tokens = Number(response.headers.get("x-markdown-tokens"));
    const body = await response.text();
    expect(tokens).toBe(estimateMarkdownTokens(body));
    expect(tokens).toBeGreaterThan(50);
  });
});

describe("isMarkdownDocumentPath", () => {
  it("skips APIs, Next internals, and static files", () => {
    expect(isMarkdownDocumentPath("/")).toBe(true);
    expect(isMarkdownDocumentPath("/about")).toBe(true);
    expect(isMarkdownDocumentPath("/api/markdown")).toBe(false);
    expect(isMarkdownDocumentPath("/api")).toBe(false);
    expect(isMarkdownDocumentPath("/_next/static/chunk.js")).toBe(false);
    expect(isMarkdownDocumentPath("/brand/favicon.svg")).toBe(false);
    expect(isMarkdownDocumentPath("/robots.txt")).toBe(false);
    expect(isMarkdownDocumentPath("/fonts/source-sans-3/LICENSE.md")).toBe(false);
  });
});
