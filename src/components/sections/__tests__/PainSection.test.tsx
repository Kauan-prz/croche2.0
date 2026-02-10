import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PainSection } from "../PainSection";
import { painPoints } from "@/data/content";

describe("PainSection", () => {
  it("renders the section title", () => {
    render(<PainSection />);
    expect(screen.getByText("Você se identifica?")).toBeInTheDocument();
  });

  it("renders all pain points", () => {
    render(<PainSection />);
    painPoints.forEach((point) => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });

  it("renders numbered badges for each pain point", () => {
    render(<PainSection />);
    painPoints.forEach((_, i) => {
      expect(screen.getByText(String(i + 1))).toBeInTheDocument();
    });
  });
});
