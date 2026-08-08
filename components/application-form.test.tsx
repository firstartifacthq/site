import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ApplicationForm } from "@/components/application-form";

describe("ApplicationForm", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it("exposes every required field with a persistent label", () => {
    render(<ApplicationForm />);

    expect(screen.getByRole("textbox", { name: /^name$/i })).toBeRequired();
    expect(screen.getByRole("textbox", { name: /^email$/i })).toBeRequired();
    expect(screen.getByRole("combobox", { name: /you are a/i })).toBeRequired();
    expect(screen.getByRole("textbox", { name: /strongest shipped work/i })).toBeRequired();
    expect(screen.getByRole("textbox", { name: /^what did you build/i })).toBeRequired();
    expect(screen.getByRole("textbox", { name: /stop thinking about/i })).toBeRequired();
  });

  it("announces validation errors and focuses the first invalid field", async () => {
    const user = userEvent.setup();
    render(<ApplicationForm />);

    await user.click(screen.getByRole("button", { name: /review my application/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Check 6 fields");
    expect(screen.getByText("Add your name.")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /^name$/i })).toHaveFocus();
  });

  it("preserves valid answers and reports that submissions are not connected", async () => {
    const user = userEvent.setup();
    render(<ApplicationForm />);

    await user.type(screen.getByRole("textbox", { name: /^name$/i }), "Aryan Iyaps");
    await user.type(screen.getByRole("textbox", { name: /^email$/i }), "aryan@example.com");
    await user.selectOptions(screen.getByRole("combobox", { name: /you are a/i }), "builder");
    await user.type(
      screen.getByRole("textbox", { name: /strongest shipped work/i }),
      "https://example.com/work",
    );
    await user.type(screen.getByRole("textbox", { name: /^what did you build/i }), "A useful tool.");
    await user.type(
      screen.getByRole("textbox", { name: /stop thinking about/i }),
      "Compounding agency.",
    );
    await user.click(screen.getByRole("button", { name: /review my application/i }));

    expect(await screen.findByRole("status")).toHaveTextContent("Submissions aren’t connected yet");
    expect(screen.getByDisplayValue("Aryan Iyaps")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /copy application/i })).toBeEnabled();
  });

  it("copies a portable application after review", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue(undefined);
    render(<ApplicationForm />);

    await user.type(screen.getByRole("textbox", { name: /^name$/i }), "Aryan");
    await user.type(screen.getByRole("textbox", { name: /^email$/i }), "aryan@example.com");
    await user.selectOptions(screen.getByRole("combobox", { name: /you are a/i }), "founder");
    await user.type(
      screen.getByRole("textbox", { name: /strongest shipped work/i }),
      "https://example.com/work",
    );
    await user.type(screen.getByRole("textbox", { name: /^what did you build/i }), "A useful thing.");
    await user.type(
      screen.getByRole("textbox", { name: /stop thinking about/i }),
      "Building useful things.",
    );
    await user.click(screen.getByRole("button", { name: /review my application/i }));
    await user.click(await screen.findByRole("button", { name: /copy application/i }));

    expect(writeText).toHaveBeenCalledWith(
      expect.stringContaining("First Artifact application"),
    );
    expect(screen.getByRole("status")).toHaveTextContent("Copied");
  });
});
