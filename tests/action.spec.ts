import { test, expect, Locator } from "@playwright/test"


test("verify the action", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  // await page.locator("#country").selectOption("India")
  // await page.locator("#country").selectOption({ value: "uk" });

  // await page.locator("#country").selectOption({ label: "uk" });
  // await page.locator("#country").selectOption({ index: 3 });


  // const dropdown = page.locator("#country>option");
  // await expect(dropdown).toHaveCount(10); //assertions 

  // await page.waitForTimeout(5000);

  // //check an option present in dropdown

  // const optiontext: string[] = (await dropdown.allTextContents()).map(text => text.trim());

  // console.log(optiontext);

  // expect(optiontext).toContain("Japan"); // check array in dropdown 

  // await page.waitForTimeout(5000);

  // // printing option from dropdown

  // for (const option of optiontext) {
  //   console.log(option);
  // }


  await page.locator("#colors").selectOption(["red", "Blue", "Green"]);



  await page.waitForTimeout(5000);




})