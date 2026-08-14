import { describe, expect, it } from "vitest";

import { appendVaryAccept, wantsMarkdown } from "@/lib/markdown/accept";

describe("wantsMarkdown", () => {
  it("returns false when Accept is missing, empty, or */*", () => {
    expect(wantsMarkdown(null)).toBe(false);
    expect(wantsMarkdown("")).toBe(false);
    expect(wantsMarkdown("*/*")).toBe(false);
    expect(wantsMarkdown("application/json, */*;q=0.1")).toBe(false);
  });

  it("returns true when text/markdown is requested", () => {
    expect(wantsMarkdown("text/markdown")).toBe(true);
    expect(wantsMarkdown("text/markdown, text/html;q=0.9")).toBe(true);
    expect(wantsMarkdown("text/*")).toBe(true);
  });

  it("honors q-values so HTML can still win", () => {
    expect(wantsMarkdown("text/html, text/markdown;q=0.1")).toBe(false);
    expect(wantsMarkdown("text/markdown;q=0.2, text/html;q=0.8")).toBe(false);
    expect(wantsMarkdown("text/html;q=0, text/markdown;q=0.5")).toBe(true);
  });

  it("leaves Next.js RSC and browser navigations on HTML", () => {
    expect(wantsMarkdown("text/x-component")).toBe(false);
    expect(
      wantsMarkdown(
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      ),
    ).toBe(false);
  });
});

describe("appendVaryAccept", () => {
  it("sets or appends Vary: Accept without duplicating it", () => {
    const headers = new Headers();
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept");

    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept");

    const withExisting = new Headers({ Vary: "Accept-Encoding" });
    appendVaryAccept(withExisting);
    expect(withExisting.get("Vary")).toBe("Accept-Encoding, Accept");
  });
});
