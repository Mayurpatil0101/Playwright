import { test, expect } from "@playwright/test";

// only,skip,fail,skipme,slow

test("open app", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await expect(page).toHaveTitle("STORE");
});


test.fail("open app2", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await expect(page).toHaveURL("https://www.demoblaze.com/");
});

test.skip("open app1", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  let text = page.locator("#nava");
  expect(text).toHaveText(" PRODUCT STORE");
});

test.fixme("open app22", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  let text = page.locator("#nava");
  expect(text).toHaveText(" PRODUCT STORE");
});
