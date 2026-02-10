import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("Crochê Pro")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Footer />);
    expect(screen.getByText("Transforme seu hobby em um negócio lucrativo")).toBeInTheDocument();
  });

  it("renders the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
  });

  it("has a support link", () => {
    render(<Footer />);
    expect(screen.getByText("Suporte")).toBeInTheDocument();
  });

  it("has a FAQ link", () => {
    render(<Footer />);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("has a back to top link", () => {
    render(<Footer />);
    expect(screen.getByText("Voltar ao topo")).toBeInTheDocument();
  });
});
