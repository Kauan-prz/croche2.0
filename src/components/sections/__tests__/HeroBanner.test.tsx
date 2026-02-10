import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroBanner } from "../HeroBanner";
import { heroText } from "@/data/content";

describe("HeroBanner", () => {
  it("renders the hero text", () => {
    render(<HeroBanner />);
    expect(screen.getByText(heroText)).toBeInTheDocument();
  });

  it("has the sparkle-header-bg class", () => {
    render(<HeroBanner />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("sparkle-header-bg");
  });

  it("has the id 'inicio' for navigation", () => {
    render(<HeroBanner />);
    const header = screen.getByRole("banner");
    expect(header).toHaveAttribute("id", "inicio");
  });
});
