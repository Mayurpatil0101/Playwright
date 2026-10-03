import { test, expect } from "@playwright/test";

test.beforeEach('verfiy thr report', async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
});

test("open app", async ({ page }) => {
  await expect(page).toHaveTitle("STORE");
});


test("open app2", async ({ page }) => {
  await expect(page).toHaveURL("https://www.demoblaze.com/");
});

test("open app1", async ({ page }) => {
  let text = page.locator("#nava");
  await expect(text).toHaveText(" PRODUCT STORES");
});
