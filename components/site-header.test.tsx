import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("provides every primary route and the application target", () => {
    const { container } = render(<SiteHeader />);

    expect(container.querySelector(".liquid-glass")).not.toBeInTheDocument();
    expect(container.querySelector("header")).toHaveClass("bg-[hsl(var(--signal))]");
    expect(container.querySelector("header")).toHaveClass("z-[70]");
    expect(screen.getByRole("link", { name: /first artifact home/i })).toHaveAttribute("href", "/");
    const primary = screen.getByRole("navigation", { name: /primary/i });
    expect(within(primary).getByRole("link", { name: /^home$/i })).toHaveAttribute("href", "/");
    expect(within(primary).getByRole("link", { name: /^admission$/i })).toHaveAttribute("href", "/admission");
    expect(within(primary).getByRole("link", { name: /^events$/i })).toHaveAttribute("href", "/events");
    expect(within(primary).getByRole("link", { name: /^faq$/i })).toHaveAttribute("href", "/faq");
    expect(screen.getByRole("link", { name: /^apply$/i })).toHaveAttribute("href", "/#apply");
  });
});
