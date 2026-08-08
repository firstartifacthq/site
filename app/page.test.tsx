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
    expect(screen.getByRole("region", { name: /first artifact principles/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /talent is everywhere\. obsession is rare/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /the bar is shipped work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /meet the team/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /make progress feel like play/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /apply with your work/i })).toBeInTheDocument();

    const memberList = screen.getByRole("list", { name: /founding members/i });
    expect(within(memberList).getAllByRole("listitem")).toHaveLength(5);
    expect(within(memberList).getAllByText(/profile pending/i)).toHaveLength(5);

    expect(screen.getByText(/formats we intend to host/i)).toBeInTheDocument();
    expect(container.querySelector("#apply")).toBeInTheDocument();

    const manifesto = screen.getByRole("region", { name: /talent is everywhere\. obsession is rare/i });
    expect(manifesto).toHaveClass("bg-black");
  });

  it("states all six manifesto beliefs", () => {
    render(<Home />);
    const manifesto = screen.getByRole("list", { name: /manifesto beliefs/i });

    for (const belief of [
      "Obsession beats talent",
      "Proof over promise",
      "Agency over permission",
      "Build when nobody watches",
      "Progress should feel fun",
      "Protect the density",
    ]) {
      expect(within(manifesto).getByText(belief, { exact: true })).toBeInTheDocument();
    }
  });
});
