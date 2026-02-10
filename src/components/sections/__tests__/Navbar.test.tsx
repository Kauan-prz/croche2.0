import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../Navbar";
import { navItems } from "@/data/content";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Crochê Pro")).toBeInTheDocument();
  });

  it("renders all nav items", () => {
    render(<Navbar />);
    navItems.forEach((item) => {
      const buttons = screen.getAllByText(item.label);
      expect(buttons.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders the INSCREVA-SE button", () => {
    render(<Navbar />);
    const buttons = screen.getAllByText("INSCREVA-SE");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it("has a mobile menu button", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Menu")).toBeInTheDocument();
  });
});
