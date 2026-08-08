import { describe, expect, it } from "vitest";

import {
  emptyApplication,
  formatApplication,
  validateApplication,
} from "@/lib/application";

describe("validateApplication", () => {
  it("returns field errors for a blank application", () => {
    const result = validateApplication(emptyApplication);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toEqual({
        name: "Add your name.",
        email: "Add your email address.",
        role: "Choose builder or founder.",
        workUrl: "Add a link to your strongest shipped work.",
        built: "Tell us what you built.",
        obsession: "Tell us what you cannot stop thinking about.",
      });
    }
  });

  it("rejects invalid email, role, and non-web work links", () => {
    const result = validateApplication({
      name: "Aryan",
      email: "not-an-email",
      role: "investor",
      workUrl: "ftp://example.com/project",
      built: "A production tool that helps teams ship and learn faster.",
      obsession: "How small groups of relentless people compound one another's agency.",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors.email).toBe("Enter a valid email address.");
      expect(result.errors.role).toBe("Choose builder or founder.");
      expect(result.errors.workUrl).toBe("Use a complete http or https link.");
    }
  });

  it("normalizes a valid application", () => {
    const result = validateApplication({
      name: "  Aryan Iyaps  ",
      email: "  ARYAN@example.com ",
      role: "builder",
      workUrl: " https://example.com/work ",
      built: "  A production tool\nthat makes work visible.  ",
      obsession: "  Making high-agency communities feel alive.  ",
    });

    expect(result).toEqual({
      success: true,
      data: {
        name: "Aryan Iyaps",
        email: "aryan@example.com",
        role: "builder",
        workUrl: "https://example.com/work",
        built: "A production tool\nthat makes work visible.",
        obsession: "Making high-agency communities feel alive.",
      },
    });
  });
});

describe("formatApplication", () => {
  it("produces a portable plain-text application", () => {
    const result = formatApplication({
      name: "Aryan Iyaps",
      email: "aryan@example.com",
      role: "founder",
      workUrl: "https://example.com/work",
      built: "A useful thing.",
      obsession: "Making things people keep using.",
    });

    expect(result).toContain("First Artifact application");
    expect(result).toContain("Role: Founder");
    expect(result).toContain("Strongest shipped work: https://example.com/work");
  });
});
