import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ManifestoPage from "@/app/manifesto/page";

describe("manifesto page", () => {
  it("renders the manifesto in one ordered heading hierarchy", () => {
    const { container } = render(<ManifestoPage />);

    expect(container.querySelector("#main-content")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /building a community of the obsessed/i }),
    ).toBeInTheDocument();

    for (const title of [/who we’re for/i, /the bar/i, /what it feels like/i, /what we do/i]) {
      expect(screen.getByRole("heading", { level: 2, name: title })).toBeInTheDocument();
    }

    // A single h1, and no heading level is skipped.
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);

    expect(screen.getByText(/talent is everywhere\. obsession is rare/i)).toBeInTheDocument();
    expect(screen.getByText(/is this the thing you think about all the time/i)).toBeInTheDocument();
    expect(screen.getByText(/one weak yes lowers the ceiling/i)).toBeInTheDocument();
    expect(screen.getByText(/that’s the whole thing\./i)).toBeInTheDocument();
  });

  it("states the working model without relying on unreadable glyphs", () => {
    render(<ManifestoPage />);

    expect(screen.getByText(/fun is approximately agency multiplied by progress/i)).toBeInTheDocument();
  });

  it("routes both closing actions to real destinations", () => {
    render(<ManifestoPage />);

    expect(screen.getByRole("link", { name: /apply with your work/i })).toHaveAttribute(
      "href",
      "/#apply",
    );

    const discord = screen.getByRole("link", { name: /join the discord/i });
    expect(discord).toHaveAttribute("href", "https://discord.gg/3nqumWTuHb");
    expect(discord).toHaveAttribute("target", "_blank");
    expect(discord).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("claims no dates, pricing, or member counts", () => {
    render(<ManifestoPage />);

    expect(screen.queryByText(/\bspots? (left|remaining)\b/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\$\d/)).not.toBeInTheDocument();
    expect(screen.queryByText(/\bapply by\b/i)).not.toBeInTheDocument();
  });
});
