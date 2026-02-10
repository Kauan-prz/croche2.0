import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhatsAppFloat } from "../../WhatsAppFloat";
import { WHATSAPP_URL } from "@/data/content";

describe("WhatsAppFloat", () => {
  it("renders a WhatsApp link", () => {
    render(<WhatsAppFloat />);
    const link = screen.getByLabelText("Contato via WhatsApp");
    expect(link).toBeInTheDocument();
  });

  it("links to WhatsApp URL", () => {
    render(<WhatsAppFloat />);
    const link = screen.getByLabelText("Contato via WhatsApp");
    expect(link).toHaveAttribute("href", WHATSAPP_URL);
  });

  it("opens in new tab", () => {
    render(<WhatsAppFloat />);
    const link = screen.getByLabelText("Contato via WhatsApp");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
