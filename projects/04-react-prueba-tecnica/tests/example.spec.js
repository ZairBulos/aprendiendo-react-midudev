// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173/";

test("app shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const paragraph = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const paragraphContext = await paragraph.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(paragraphContext?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith("https://cataas.com")).toBeTruthy();
});
