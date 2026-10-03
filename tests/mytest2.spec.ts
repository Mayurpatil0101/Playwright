import { test, expect } from "@playwright/test"

// fixture  = global variable  = page,browser
test("verfiy page url", async ({ page }) => {
  await page.goto("https://www.naturasfoods.com/");
  let title: string = await page.title();
  console.log(title);
  await expect(page).toHaveURL(/naturasfoods/);
})