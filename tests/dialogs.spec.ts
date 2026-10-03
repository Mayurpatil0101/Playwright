import { test, expect, chromium } from "@playwright/test";

test("verify the alert", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");

  await Promise.all([context.waitForEvent('page'), page.locator("button:has-text('New Tab')").click()]);

  const pages = context.pages();

  console.log(await pages[0].title());
  console.log(await pages[1].title());



});