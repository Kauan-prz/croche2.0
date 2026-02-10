import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SecurityBadge } from "../SecurityBadge";

describe("SecurityBadge", () => {
  it("renders the security badge image", () => {
    render(<SecurityBadge />);
    const img = screen.getByAltText("Compra segura");
    expect(img).toBeInTheDocument();
  });

  it("has lazy loading", () => {
    render(<SecurityBadge />);
    const img = screen.getByAltText("Compra segura");
    expect(img).toHaveAttribute("loading", "lazy");
  });
});
