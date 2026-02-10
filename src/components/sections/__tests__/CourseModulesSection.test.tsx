import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CourseModulesSection } from "../CourseModulesSection";
import { courseModules } from "@/data/content";

describe("CourseModulesSection", () => {
  it("renders the section title", () => {
    render(<CourseModulesSection />);
    expect(screen.getByText("O que você vai aprender")).toBeInTheDocument();
  });

  it("renders all module titles", () => {
    render(<CourseModulesSection />);
    courseModules.forEach((mod) => {
      expect(screen.getByText(mod.title)).toBeInTheDocument();
    });
  });

  it("renders all lessons", () => {
    render(<CourseModulesSection />);
    courseModules.forEach((mod) => {
      mod.lessons.forEach((lesson) => {
        expect(screen.getByText(lesson)).toBeInTheDocument();
      });
    });
  });

  it("has the modulos id for navigation", () => {
    render(<CourseModulesSection />);
    const section = document.getElementById("modulos");
    expect(section).toBeInTheDocument();
  });
});
