import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GuaranteeSection } from "../GuaranteeSection";
import { guaranteeText } from "@/data/content";

describe("GuaranteeSection", () => {
  it("renders the guarantee title", () => {
    render(<GuaranteeSection />);
    expect(screen.getByText("Garantia incondicional de 7 dias")).toBeInTheDocument();
  });

  it("renders the guarantee text", () => {
    render(<GuaranteeSection />);
    expect(screen.getByText(guaranteeText)).toBeInTheDocument();
  });

  it("renders the guarantee badge image", () => {
    render(<GuaranteeSection />);
    const img = screen.getByAltText("Selo de garantia 7 dias");
    expect(img).toBeInTheDocument();
  });
});
