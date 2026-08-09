import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("home page", () => {
  it("renders the approved persuasion sequence with one application destination", () => {
    const { container } = render(<Home />);

    expect(container.querySelector(".liquid-glass")).not.toBeInTheDocument();
    expect(screen.queryByTestId("living-signal")).not.toBeInTheDocument();
    expect(container.querySelector('[tabindex="0"]')).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: /^obsess$/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /first artifact manifesto/i })).toBeInTheDocument();
    expect(screen.getByText(/we make room for people who build/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /the bar is shipped work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /meet the team/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /make progress feel like play/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /apply with your work/i })).toBeInTheDocument();

    const memberList = screen.getByRole("list", { name: /founding members/i });
    expect(within(memberList).getAllByRole("listitem")).toHaveLength(5);
    expect(within(memberList).getAllByText(/profile pending/i)).toHaveLength(5);

    expect(screen.getByText(/formats we intend to host/i)).toBeInTheDocument();
    expect(container.querySelector("#apply")).toBeInTheDocument();

    const manifesto = screen.getByRole("region", { name: /first artifact manifesto/i });
    expect(manifesto).toHaveClass("bg-[hsl(var(--signal))]");
    expect(within(manifesto).getByText("F.A.")).toHaveClass("font-display");
    expect(within(manifesto).getByText(/we make room for people who build/i)).toHaveClass("font-sans");
    expect(within(manifesto).getByText("F.A.")).toBeInTheDocument();
    expect(within(manifesto).getByTestId("manifesto-video")).toHaveAttribute("src", "https://res.cloudinary.com/daklr2whx/video/upload/v1778602552/track-video_2_s9lp53.mp4");
    expect(within(manifesto).getByTestId("manifesto-video-fallback")).toHaveAttribute("src", "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8");
    expect(screen.queryByRole("list", { name: /manifesto beliefs/i })).not.toBeInTheDocument();
  });
});
