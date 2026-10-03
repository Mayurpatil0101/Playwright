import { test, expect, Locator } from "@playwright/test"


test("verify the action", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  // const dropdown: Locator = page.locator('#animals>option'); // not having duplicate

  const dropdownlist: Locator = page.locator('#colors>option');

  const optiontext: string[] = (await dropdownlist.allTextContents()).map(text => text.trim());


  const myset = new Set<String>();
  const duplicate: string[] = [];

  for (const text of optiontext) {
    if (myset.has(text)) {
      duplicate.push(text);
    } else {
      myset.add(text);
    }
  }

  console.log("duplicate option :", duplicate);

  expect(duplicate.length).toBe(0);




  // await page.waitForTimeout(5000);

});