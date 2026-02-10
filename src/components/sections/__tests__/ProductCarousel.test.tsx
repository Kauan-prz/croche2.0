import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProductCarousel } from "../ProductCarousel";

const mockImages = [
  { src: "https://example.com/img1.jpg", alt: "Peça 1" },
  { src: "https://example.com/img2.jpg", alt: "Peça 2" },
  { src: "https://example.com/img3.jpg", alt: "Peça 3" },
];

describe("ProductCarousel", () => {
  it("renders the carousel title", () => {
    render(<ProductCarousel title="Peças de teste" images={mockImages} />);
    expect(screen.getByText("Peças de teste")).toBeInTheDocument();
  });

  it("renders all images", () => {
    render(<ProductCarousel title="Peças de teste" images={mockImages} />);
    mockImages.forEach((img) => {
      expect(screen.getByAltText(img.alt)).toBeInTheDocument();
    });
  });

  it("images have lazy loading", () => {
    render(<ProductCarousel title="Peças de teste" images={mockImages} />);
    mockImages.forEach((img) => {
      const element = screen.getByAltText(img.alt);
      expect(element).toHaveAttribute("loading", "lazy");
    });
  });
});
