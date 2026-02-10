import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CtaButton } from "../CtaButton";
import { ctaText, ctaSubText, PAYMENT_URL } from "@/data/content";

describe("CtaButton", () => {
  it("renders the CTA text", () => {
    render(<CtaButton />);
    expect(screen.getByText(ctaText)).toBeInTheDocument();
  });

  it("renders the CTA sub text", () => {
    render(<CtaButton />);
    expect(screen.getByText(ctaSubText)).toBeInTheDocument();
  });

  it("links to the payment URL", () => {
    render(<CtaButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", PAYMENT_URL);
  });

  it("opens link in new tab", () => {
    render(<CtaButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
