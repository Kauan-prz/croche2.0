import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TestimonialsSection } from "../TestimonialsSection";
import { testimonialsTitle } from "@/data/content";
import { testimonialImages } from "@/data/images";

describe("TestimonialsSection", () => {
  it("renders the section title", () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(testimonialsTitle)).toBeInTheDocument();
  });

  it("renders testimonial images", () => {
    render(<TestimonialsSection />);
    testimonialImages.forEach((img) => {
      expect(screen.getByAltText(img.alt)).toBeInTheDocument();
    });
  });

  it("has the depoimentos id for navigation", () => {
    render(<TestimonialsSection />);
    const section = document.getElementById("depoimentos");
    expect(section).toBeInTheDocument();
  });
});
