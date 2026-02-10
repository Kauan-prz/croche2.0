import { test, expect } from "@playwright/test";

test.describe("Responsividade - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deve exibir o menu hambúrguer no mobile", async ({ page }) => {
    const menuBtn = page.getByLabel("Menu");
    await expect(menuBtn).toBeVisible();
  });

  test("deve abrir o menu mobile ao clicar", async ({ page }) => {
    const menuBtn = page.getByLabel("Menu");
    await menuBtn.click();

    await expect(page.getByText("Início")).toBeVisible();
    await expect(page.getByText("Curso")).toBeVisible();
    await expect(page.getByText("Depoimentos")).toBeVisible();
  });

  test("deve exibir sticky CTA após rolar", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 700));
    await page.waitForTimeout(500);

    const stickyCta = page.locator("text=QUERO COMEÇAR AGORA - R$27,90");
    await expect(stickyCta).toBeVisible();
  });

  test("seções devem estar em coluna única", async ({ page }) => {
    const targetSection = page.locator("#para-quem");
    await targetSection.scrollIntoViewIfNeeded();

    const cards = targetSection.locator("> div > div.grid > div");
    const count = await cards.count();
    if (count > 0) {
      const firstBox = await cards.first().boundingBox();
      const secondBox = await cards.nth(1).boundingBox();
      if (firstBox && secondBox) {
        expect(secondBox.y).toBeGreaterThan(firstBox.y);
      }
    }
  });
});

test.describe("Responsividade - Desktop", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deve exibir nav items no desktop", async ({ page }) => {
    await expect(page.getByRole("link", { name: "INSCREVA-SE" }).first()).toBeVisible();
  });

  test("menu hambúrguer deve estar oculto no desktop", async ({ page }) => {
    const menuBtn = page.getByLabel("Menu");
    await expect(menuBtn).not.toBeVisible();
  });

  test("sticky CTA mobile deve estar oculto no desktop", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 700));
    await page.waitForTimeout(500);

    const stickyCta = page.locator("text=QUERO COMEÇAR AGORA - R$27,90");
    await expect(stickyCta).not.toBeVisible();
  });
});
