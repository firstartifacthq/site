import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero, getSideWordStyle } from "@/components/home/hero";

describe("getSideWordStyle", () => {
  it("matches the supplied desktop scroll math", () => {
    expect(getSideWordStyle("left", 0, 0, false)).toEqual({ x: -60, opacity: 0.35 });
    expect(getSideWordStyle("left", 3, 0, false)).toEqual({ x: -180, opacity: 0.35 });
    expect(getSideWordStyle("right", 2, 0, false)).toEqual({ x: 140, opacity: 0.35 });
    expect(getSideWordStyle("right", 3, 1, false)).toEqual({ x: 0, opacity: 1 });
  });

  it("halves offsets below 768px", () => {
    expect(getSideWordStyle("left", 1, 0, true)).toEqual({ x: -50, opacity: 0.35 });
    expect(getSideWordStyle("right", 3, 0, true)).toEqual({ x: 90, opacity: 0.35 });
  });
});

describe("Hero", () => {
  it("renders the adapted stacked title and exact live character asset", () => {
    const { container } = render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1, name: /obsess/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/First Artifact is a private club/i);
    expect(heading.parentElement).toHaveClass("pt-[calc(5.5rem+2vh)]", "md:pt-[calc(5.5rem+3vh)]");
    expect(container.querySelectorAll('[aria-hidden="true"][data-title-layer]')).toHaveLength(3);
    expect(container.querySelector("[data-hero-grid]")).toHaveClass(
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.28)_1px,transparent_1px)]",
    );
    expect(container.querySelector("[data-hero-grid-fade]")).toHaveClass(
      "[mask-image:radial-gradient(ellipse_at_center,transparent_42%,black_94%)]",
    );
    expect(container.querySelector("section")).toHaveStyle({ height: "120vh" });
    expect(container.querySelector('img[src*="images.higgs.ai"]')).toBeInTheDocument();
  });
});
