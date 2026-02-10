import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Headline } from "../Headline";
import { headlineText, subheadlineText } from "@/data/content";

describe("Headline", () => {
  it("renders the headline text", () => {
    render(<Headline />);
    expect(screen.getByText(headlineText)).toBeInTheDocument();
  });

  it("renders the subheadline text", () => {
    render(<Headline />);
    expect(screen.getByText(subheadlineText)).toBeInTheDocument();
  });
});
