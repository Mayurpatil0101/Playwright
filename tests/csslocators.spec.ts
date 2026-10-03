import { test, expect, Locator } from "@playwright/test"


test("verify the locator", async ({ page }) => {

  await page.goto("https://www.swiggy.com/");

  const locationButton = page.getByText("Enter your delivery location");

  await locationButton.click();

  let searchbox: Locator = page.locator("#location");

  await searchbox.fill('mayur');

  await expect(searchbox).toHaveValue('mayur');

})