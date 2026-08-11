import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("home page", () => {
  it("renders the approved persuasion sequence with one application destination", () => {
    const { container } = render(<Home />);

    expect(container.querySelector(".liquid-glass")).not.toBeInTheDocument();
    expect(screen.queryByTestId("living-signal")).not.toBeInTheDocument();
    expect(container.querySelector('[tabindex="0"]')).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: /obsess/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /obsession beats talent/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /obsession beats talent every time/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /what we look for/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^high agency$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^traction$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^obsession$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /meet the team/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /make progress feel like play/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /what you need to know/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /what is first artifact/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /your move/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /apply with your work/i })).not.toBeInTheDocument();
    const applyLinks = screen.getAllByRole("link", { name: /^apply$/i });
    expect(applyLinks.length).toBeGreaterThanOrEqual(1);
    for (const apply of applyLinks) {
      expect(apply).toHaveAttribute("href", "https://forms.gle/FGJtVdbWxTLgVsKA9");
      expect(apply).toHaveAttribute("target", "_blank");
    }
    const discordLinks = screen.getAllByRole("link", { name: /join the discord/i });
    expect(discordLinks).toHaveLength(1);
    for (const discord of discordLinks) {
      expect(discord).toHaveAttribute("href", "https://discord.gg/3nqumWTuHb");
      expect(discord).toHaveAttribute("target", "_blank");
      expect(discord.querySelector("svg")).not.toBeNull();
    }

    const memberList = screen.getByRole("list", { name: /founding members/i });
    expect(within(memberList).getAllByRole("listitem")).toHaveLength(5);
    expect(within(memberList).getByText("Aryan Iyappan")).toBeInTheDocument();
    expect(within(memberList).getByRole("link", { name: /lamina\.dev/i })).toHaveAttribute("href", "https://lamina.dev");
    expect(within(memberList).getByText("Gokul Ravi")).toBeInTheDocument();
    expect(within(memberList).getByRole("link", { name: /bountykai/i })).toHaveAttribute("href", "https://bountykai.com/");
    expect(within(memberList).getByText("Yash Kulkarni")).toBeInTheDocument();
    expect(within(memberList).getByRole("link", { name: /purplerain/i })).toHaveAttribute("href", "https://purplerain.tech");
    expect(within(memberList).getByText("Michael Abejo")).toBeInTheDocument();
    expect(within(memberList).getByText("Capsul")).toBeInTheDocument();
    expect(within(memberList).getByText("Advaith Vaithianathan")).toBeInTheDocument();
    expect(within(memberList).getByRole("link", { name: /hydra fund/i })).toHaveAttribute(
      "href",
      "https://www.hydrafund.ch/",
    );
    const hrefsFor = (name: RegExp) =>
      within(memberList).getAllByRole("link", { name }).map((link) => link.getAttribute("href"));
    expect(hrefsFor(/^x$/i)).toContain("https://x.com/_NoNameWrath");
    expect(hrefsFor(/^linkedin$/i)).toContain("https://www.linkedin.com/in/abejomichael/");
    expect(hrefsFor(/^linkedin$/i)).toContain("https://www.linkedin.com/in/advaithvaithianathan/");
    expect(hrefsFor(/^github$/i)).toContain("https://github.com/cosmic-hydra");
    // Capsul has no confirmed public URL yet, so it must not render as a link.
    expect(within(memberList).queryByRole("link", { name: /^capsul$/i })).not.toBeInTheDocument();
    expect(within(memberList).queryByText(/profile pending/i)).not.toBeInTheDocument();
    expect(within(memberList).queryByText(/founding member 05/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/proven builders and founders already inside/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/remaining profiles will appear/i)).not.toBeInTheDocument();

    expect(screen.getByText(/formats we intend to host/i)).toBeInTheDocument();
    expect(container.querySelector("#apply")).not.toBeInTheDocument();

    const manifesto = screen.getByRole("region", { name: /obsession beats talent/i });
    expect(manifesto).toHaveClass("bg-[hsl(var(--signal))]");
    expect(within(manifesto).getByRole("heading", { name: /obsession beats talent/i })).toHaveClass("font-sans");
    expect(within(manifesto).getByText(/most rooms reward talk/i)).toBeInTheDocument();
    expect(within(manifesto).queryByText("F.A.")).not.toBeInTheDocument();
    expect(within(manifesto).getByTestId("manifesto-video")).toHaveAttribute("src", "/video/manifesto.mp4");
    expect(within(manifesto).getByTestId("manifesto-video-fallback")).toHaveAttribute("src", "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8");
    expect(screen.queryByRole("list", { name: /manifesto beliefs/i })).not.toBeInTheDocument();
    expect(manifesto.lastElementChild?.querySelector("[data-testid=manifesto-video]")).toBeTruthy();
  });
});
