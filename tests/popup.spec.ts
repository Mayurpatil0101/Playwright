import { test, expect, chromium } from "@playwright/test";

test("verify the alert", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");



  await Promise.all([page.waitForEvent('popup'), await page.locator("#PopUp").click()]);

  const allpopup = context.pages();

  console.log("Numner of Windows:", allpopup.length);

  // const pages = context.pages();

  // console.log(await pages[0].title());
  // console.log(await pages[1].title());

  for (const pw of allpopup) {
    const title = await pw.title();

    if (title.includes("Playwright")) {
      await pw.locator(".getStarted_Sjon").click();
      await pw.close();
    }
  }

  await page.waitForTimeout(5000);

});