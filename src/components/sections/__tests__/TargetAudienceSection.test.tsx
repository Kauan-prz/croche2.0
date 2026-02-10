import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TargetAudienceSection } from "../TargetAudienceSection";
import { targetAudience } from "@/data/content";

describe("TargetAudienceSection", () => {
  it("renders the section title", () => {
    render(<TargetAudienceSection />);
    expect(screen.getByText("Para quem é este curso?")).toBeInTheDocument();
  });

  it("renders all target audience cards", () => {
    render(<TargetAudienceSection />);
    targetAudience.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it("has the para-quem id for navigation", () => {
    render(<TargetAudienceSection />);
    const section = document.getElementById("para-quem");
    expect(section).toBeInTheDocument();
  });
});
