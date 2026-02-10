import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CountdownTimer } from "../CountdownTimer";

describe("CountdownTimer", () => {
  it("renders hours, minutes, and seconds labels", () => {
    render(<CountdownTimer />);
    expect(screen.getByText("Horas")).toBeInTheDocument();
    expect(screen.getByText("Min")).toBeInTheDocument();
    expect(screen.getByText("Seg")).toBeInTheDocument();
  });

  it("displays padded time values", () => {
    render(<CountdownTimer />);
    const timeBoxes = screen.getAllByText(/^\d{2}$/);
    expect(timeBoxes).toHaveLength(3);
  });
});
