import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InstructorSection } from "../InstructorSection";
import { instructorData } from "@/data/content";

describe("InstructorSection", () => {
  it("renders the instructor name", () => {
    render(<InstructorSection />);
    expect(screen.getByText(instructorData.name)).toBeInTheDocument();
  });

  it("renders the instructor bio", () => {
    render(<InstructorSection />);
    expect(screen.getByText(instructorData.bio)).toBeInTheDocument();
  });

  it("renders all stats", () => {
    render(<InstructorSection />);
    instructorData.stats.forEach((stat) => {
      expect(screen.getByText(stat.number)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });
});
