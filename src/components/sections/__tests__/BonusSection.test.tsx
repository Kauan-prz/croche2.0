import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BonusSection } from "../BonusSection";
import { bonusText, bonuses } from "@/data/content";

describe("BonusSection", () => {
  it("renders the section title", () => {
    render(<BonusSection />);
    expect(screen.getByText(bonusText)).toBeInTheDocument();
  });

  it("renders all bonus cards", () => {
    render(<BonusSection />);
    bonuses.forEach((bonus) => {
      expect(screen.getByText(bonus.title)).toBeInTheDocument();
      expect(screen.getByText(bonus.description)).toBeInTheDocument();
    });
  });

  it("displays bonus values", () => {
    render(<BonusSection />);
    const uniqueValues = [...new Set(bonuses.map((b) => b.value))];
    uniqueValues.forEach((value) => {
      const elements = screen.getAllByText(value);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("shows GRÁTIS badges", () => {
    render(<BonusSection />);
    const badges = screen.getAllByText("GRÁTIS");
    expect(badges).toHaveLength(bonuses.length);
  });
});
