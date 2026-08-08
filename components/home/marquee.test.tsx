import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Marquee, marqueeCopy } from "@/components/home/marquee";

describe("Marquee", () => {
  it("renders four identical copies for a seamless loop", () => {
    const { container } = render(<Marquee />);

    const copies = Array.from(container.querySelectorAll(".marquee-track > span"));
    expect(copies).toHaveLength(4);
    expect(copies.every((copy) => copy.textContent === marqueeCopy)).toBe(true);
    expect(screen.getByRole("region", { name: /first artifact principles/i })).toBeInTheDocument();
  });
});
