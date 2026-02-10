import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PricingBox } from "../PricingBox";
import { pricing, PAYMENT_URL } from "@/data/content";

describe("PricingBox", () => {
  it("renders the pricing heading", () => {
    render(<PricingBox />);
    expect(screen.getByText(pricing.heading)).toBeInTheDocument();
  });

  it("displays the original price with strikethrough", () => {
    render(<PricingBox />);
    const original = screen.getByText(pricing.originalPrice);
    expect(original).toBeInTheDocument();
    expect(original).toHaveClass("line-through");
  });

  it("displays the discounted price", () => {
    render(<PricingBox />);
    expect(screen.getByText(pricing.discountedPrice)).toBeInTheDocument();
  });

  it("shows installment info", () => {
    render(<PricingBox />);
    expect(screen.getByText(/3x de R\$9,96/)).toBeInTheDocument();
  });

  it("shows discount badge", () => {
    render(<PricingBox />);
    expect(screen.getByText(`${pricing.discountPercent}% OFF`)).toBeInTheDocument();
  });

  it("links to payment URL", () => {
    render(<PricingBox />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", PAYMENT_URL);
  });

  it("has the preco id for navigation", () => {
    render(<PricingBox />);
    const section = document.getElementById("preco");
    expect(section).toBeInTheDocument();
  });
});
