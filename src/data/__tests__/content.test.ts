import { describe, it, expect } from "vitest";
import {
  PAYMENT_URL,
  WHATSAPP_URL,
  YOUTUBE_VIDEO_ID,
  pricing,
  faqItems,
  bonuses,
  painPoints,
  targetAudience,
  courseModules,
  instructorData,
  navItems,
} from "../content";

describe("Content data", () => {
  it("has a valid payment URL", () => {
    expect(PAYMENT_URL).toMatch(/^https:\/\//);
  });

  it("has a valid WhatsApp URL", () => {
    expect(WHATSAPP_URL).toMatch(/^https:\/\/wa\.me\//);
  });

  it("has a YouTube video ID", () => {
    expect(YOUTUBE_VIDEO_ID).toBeTruthy();
    expect(YOUTUBE_VIDEO_ID.length).toBeGreaterThan(0);
  });

  it("has valid pricing data", () => {
    expect(pricing.originalPrice).toBeTruthy();
    expect(pricing.discountedPrice).toBeTruthy();
    expect(pricing.installment).toBeTruthy();
    expect(pricing.discountPercent).toBeGreaterThan(0);
    expect(pricing.discountPercent).toBeLessThanOrEqual(100);
  });

  it("has at least 5 FAQ items", () => {
    expect(faqItems.length).toBeGreaterThanOrEqual(5);
    faqItems.forEach((item) => {
      expect(item.question).toBeTruthy();
      expect(item.answer).toBeTruthy();
    });
  });

  it("has 3 bonuses", () => {
    expect(bonuses).toHaveLength(3);
    bonuses.forEach((bonus) => {
      expect(bonus.title).toBeTruthy();
      expect(bonus.description).toBeTruthy();
      expect(bonus.value).toBeTruthy();
      expect(bonus.icon).toBeTruthy();
    });
  });

  it("has pain points", () => {
    expect(painPoints.length).toBeGreaterThan(0);
    painPoints.forEach((point) => {
      expect(point).toBeTruthy();
    });
  });

  it("has target audience items", () => {
    expect(targetAudience.length).toBeGreaterThan(0);
    targetAudience.forEach((item) => {
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
    });
  });

  it("has course modules with lessons", () => {
    expect(courseModules.length).toBeGreaterThan(0);
    courseModules.forEach((mod) => {
      expect(mod.title).toBeTruthy();
      expect(mod.lessons.length).toBeGreaterThan(0);
    });
  });

  it("has instructor data with stats", () => {
    expect(instructorData.name).toBeTruthy();
    expect(instructorData.bio).toBeTruthy();
    expect(instructorData.stats.length).toBeGreaterThan(0);
  });

  it("has navigation items", () => {
    expect(navItems.length).toBeGreaterThan(0);
    navItems.forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^#/);
    });
  });
});
