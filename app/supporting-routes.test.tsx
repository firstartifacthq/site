import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AdmissionPage from "@/app/admission/page";
import EventsPage from "@/app/events/page";
import FaqPage from "@/app/faq/page";

describe("supporting routes", () => {
  it("explains the evidence-based admission standard", () => {
    render(<AdmissionPage />);
    expect(screen.queryByTestId("living-signal")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: /show us what you shipped/i })).toBeInTheDocument();
    expect(screen.getByText(/evidence of shipped work/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /apply with your work/i })).toHaveAttribute("href", "/#apply");
  });

  it("describes intended formats without inventing an event history", () => {
    render(<EventsPage />);
    expect(screen.getByRole("heading", { level: 1, name: /build in the same room/i })).toBeInTheDocument();
    expect(screen.getByText(/no events are announced yet/i)).toBeInTheDocument();
    expect(screen.getByText(/hacker houses/i)).toBeInTheDocument();
  });

  it("uses native disclosures for frequently asked questions", () => {
    render(<FaqPage />);
    expect(screen.getByRole("heading", { level: 1, name: /straight answers/i })).toBeInTheDocument();
    expect(screen.getAllByRole("group").length).toBeGreaterThanOrEqual(4);
    expect(screen.getByText(/pricing has not been announced/i)).toBeInTheDocument();
  });
});
