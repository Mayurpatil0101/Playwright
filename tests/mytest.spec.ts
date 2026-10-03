import { test, expect } from "@playwright/test"

// fixture  = global variable  = page,browser
test("verfiy page header", async ({ page }) => {
  await page.goto("https://www.naturasfoods.com/");
  let title: string = await page.title();
  console.log(title);
  await expect(page).toHaveTitle("Aguas Frescas - Natura's Foods of California");
})