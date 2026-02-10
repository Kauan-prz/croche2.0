import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FaqSection } from "../FaqSection";
import { faqItems } from "@/data/content";

describe("FaqSection", () => {
  it("renders the section title", () => {
    render(<FaqSection />);
    expect(screen.getByText("Perguntas Frequentes")).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FaqSection />);
    faqItems.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it("has the faq id for navigation", () => {
    render(<FaqSection />);
    const section = document.getElementById("faq");
    expect(section).toBeInTheDocument();
  });

  it("renders the correct number of FAQ items", () => {
    render(<FaqSection />);
    const triggers = screen.getAllByRole("button");
    expect(triggers).toHaveLength(faqItems.length);
  });
});
