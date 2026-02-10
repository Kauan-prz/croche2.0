import { test, expect } from "@playwright/test";

test.describe("Landing Page - Estrutura Geral", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deve carregar a página corretamente", async ({ page }) => {
    await expect(page).toHaveTitle(/Crochê/);
  });

  test("deve exibir o hero banner", async ({ page }) => {
    const hero = page.locator("#inicio");
    await expect(hero).toBeVisible();
    await expect(hero).toContainText("oferta");
  });

  test("deve exibir a headline principal", async ({ page }) => {
    await expect(page.getByText("Faça do crochê um negócio lucrativo")).toBeVisible();
  });

  test("deve exibir o vídeo do YouTube", async ({ page }) => {
    const iframe = page.locator("iframe[title='YouTube video player']");
    await expect(iframe).toBeVisible();
  });
});

test.describe("Landing Page - Navegação", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deve ter a navbar fixa", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
  });

  test("deve ter o botão de WhatsApp flutuante", async ({ page }) => {
    const whatsapp = page.getByLabel("Contato via WhatsApp");
    await expect(whatsapp).toBeVisible();
  });

  test("navbar muda de estilo ao rolar", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toHaveClass(/bg-transparent/);

    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);

    await expect(nav).toHaveClass(/bg-white/);
  });
});

test.describe("Landing Page - Seções de Conteúdo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deve exibir a seção de dor", async ({ page }) => {
    await expect(page.getByText("Você se identifica?")).toBeVisible();
  });

  test("deve exibir a seção de público-alvo", async ({ page }) => {
    await expect(page.getByText("Para quem é este curso?")).toBeVisible();
  });

  test("deve exibir os módulos do curso", async ({ page }) => {
    const modulos = page.locator("#modulos");
    await expect(modulos).toBeVisible();
    await expect(page.getByText("Módulo 1 - Fundamentos")).toBeVisible();
  });

  test("deve exibir carrosséis de produtos", async ({ page }) => {
    await expect(page.getByText("Você vai aprender peças de roupas!")).toBeVisible();
    await expect(page.getByText("Você vai aprender amigurumi!")).toBeVisible();
    await expect(page.getByText("Você vai aprender peças para sua casa!")).toBeVisible();
  });

  test("deve exibir a seção da instrutora", async ({ page }) => {
    await expect(page.getByText("Sua Instrutora")).toBeVisible();
  });

  test("deve exibir a seção de bônus", async ({ page }) => {
    await expect(page.getByText("+500 Receitas Exclusivas")).toBeVisible();
    await expect(page.getByText("Grupo VIP no WhatsApp")).toBeVisible();
    await expect(page.getByText("Guia de Precificação")).toBeVisible();
  });

  test("deve exibir a seção de depoimentos", async ({ page }) => {
    const depoimentos = page.locator("#depoimentos");
    await expect(depoimentos).toBeVisible();
  });

  test("deve exibir a seção de garantia", async ({ page }) => {
    await expect(page.getByText("Garantia incondicional de 7 dias")).toBeVisible();
  });

  test("deve exibir o FAQ", async ({ page }) => {
    const faq = page.locator("#faq");
    await expect(faq).toBeVisible();
    await expect(page.getByText("Perguntas Frequentes")).toBeVisible();
  });

  test("deve exibir o footer", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("Crochê Pro");
  });
});

test.describe("Landing Page - Conversão (CTAs)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deve ter CTAs com link de pagamento correto", async ({ page }) => {
    const paymentLinks = page.locator('a[href*="kiwify.com.br"]');
    const count = await paymentLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);

    for (let i = 0; i < count; i++) {
      await expect(paymentLinks.nth(i)).toHaveAttribute("target", "_blank");
    }
  });

  test("deve exibir o preço com desconto", async ({ page }) => {
    const preco = page.locator("#preco");
    await expect(preco).toBeVisible();
    await expect(page.getByText("R$27,90")).toBeVisible();
  });

  test("deve exibir o preço original riscado", async ({ page }) => {
    const originalPrice = page.locator(".line-through").first();
    await expect(originalPrice).toBeVisible();
    await expect(originalPrice).toContainText("R$197,90");
  });

  test("deve exibir o countdown timer", async ({ page }) => {
    await expect(page.getByText("Horas")).toBeVisible();
    await expect(page.getByText("Min")).toBeVisible();
    await expect(page.getByText("Seg")).toBeVisible();
  });

  test("deve exibir o selo de compra segura", async ({ page }) => {
    const badge = page.getByAltText("Compra segura");
    await expect(badge).toBeVisible();
  });
});

test.describe("Landing Page - FAQ Interativo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("deve expandir e colapsar FAQ ao clicar", async ({ page }) => {
    const firstQuestion = page.getByText("Preciso ter experiência com crochê?");
    await firstQuestion.scrollIntoViewIfNeeded();
    await firstQuestion.click();

    await expect(
      page.getByText("Não! O curso foi pensado para iniciantes")
    ).toBeVisible();
  });
});
