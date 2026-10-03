import { test, expect, Locator } from "@playwright/test"


test("verify the action", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const sorted: Locator = page.locator('#animals>option');

  // console.log((await sorted.allTextContents()).map(text => text.trim()));

  const optiontext: string[] = (await sorted.allTextContents()).map(text => text.trim());

  const originallist: string[] = [...optiontext];
  const sortedlist: string[] = [...optiontext].sort(); // ... spread operator

  console.log("original list:", originallist);
  console.log("sorted list:", sortedlist);

  expect(originallist).toEqual(sortedlist);


  // await page.waitForTimeout(5000);

});