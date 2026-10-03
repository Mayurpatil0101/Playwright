import { test, expect } from "@playwright/test";

// only sanity --grep "@sanity" 
//only regression --grep "@regression"

//both sanity & regression --grep "(?=.*@sanity)(?=.*@regression)" ,--grep "(?=.*@sanity)|(?=.*@regression)"

// not sanity --grep-invert "@sanity"

test("open app", { tag: "@sanity" }, async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await expect(page).toHaveTitle("STORE");
});


test("open app2", { tag: "@regression" }, async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await expect(page).toHaveURL("https://www.demoblaze.com/");
});

test("open app1", { tag: ["@sanity", "@regression"] }, async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  let text = page.locator("#nava");
  expect(text).toHaveText(" PRODUCT STORE");
});

test.fixme("open app22", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  let text = page.locator("#nava");
  expect(text).toHaveText(" PRODUCT STORE");
});
