import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VideoSection } from "../VideoSection";
import { YOUTUBE_VIDEO_ID } from "@/data/content";

describe("VideoSection", () => {
  it("renders a YouTube iframe", () => {
    render(<VideoSection />);
    const iframe = screen.getByTitle("YouTube video player");
    expect(iframe).toBeInTheDocument();
  });

  it("uses the correct YouTube video ID", () => {
    render(<VideoSection />);
    const iframe = screen.getByTitle("YouTube video player");
    expect(iframe.getAttribute("src")).toContain(YOUTUBE_VIDEO_ID);
  });

  it("allows fullscreen", () => {
    render(<VideoSection />);
    const iframe = screen.getByTitle("YouTube video player");
    expect(iframe).toHaveAttribute("allowfullscreen");
  });
});
