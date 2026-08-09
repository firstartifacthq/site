import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("provides one-page navigation and the application target", () => {
    const { container } = render(<SiteHeader />);

    expect(container.querySelector(".liquid-glass")).not.toBeInTheDocument();
    expect(container.querySelector("header")).toHaveClass("bg-[hsl(var(--signal))]");
    expect(container.querySelector("header")).toHaveClass("z-[70]");
    expect(container.querySelector("header img")).not.toBeInTheDocument();
    expect(container.querySelector("header svg[data-brand-mark]")).toHaveAttribute("stroke-width", "56");
    expect(container.querySelector("header svg[data-brand-mark]")).toHaveClass("h-8", "w-8");
    expect(screen.getByText("First Artifact")).toHaveClass("font-sans", "text-xl", "font-semibold");
    expect(screen.getByRole("link", { name: /first artifact home/i })).toHaveAttribute("href", "/");
    const primary = screen.getByRole("navigation", { name: /primary/i });
    expect(within(primary).getByRole("link", { name: /^home$/i })).toHaveAttribute("href", "/");
    expect(within(primary).getByRole("link", { name: /^standard$/i })).toHaveAttribute("href", "/#standard");
    expect(within(primary).getByRole("link", { name: /^team$/i })).toHaveAttribute("href", "/#team");
    expect(within(primary).getByRole("link", { name: /^formats$/i })).toHaveAttribute("href", "/#formats");
    expect(screen.getByRole("link", { name: /^apply$/i })).toHaveAttribute("href", "/#apply");
    const discordLinks = screen.getAllByRole("link", { name: /join the discord/i });
    expect(discordLinks).toHaveLength(2);
    for (const discord of discordLinks) {
      expect(discord).toHaveAttribute("href", "https://discord.gg/3nqumWTuHb");
      expect(discord).toHaveAttribute("target", "_blank");
      expect(discord).toHaveAttribute("rel", expect.stringContaining("noopener"));
      expect(discord.querySelector("svg")).not.toBeNull();
    }
  });
});
