import { test, expect, Locator, Page } from "@playwright/test";


async function selecdate(targetyear: string, targetmonth: string, targetdate: string, page: Page, isfuture: boolean) {

  while (true) {

    const Montpicker = await page.locator(".ui-datepicker-month").textContent();
    const YearPicker = await page.locator(".ui-datepicker-year").textContent();
    if (Montpicker === targetmonth && YearPicker === targetyear) {
      break;
    }

    if (isfuture) {
      await page.locator(".ui-datepicker-next").click();
    } else {
      await page.locator(".ui-datepicker-next").click();
    }
    await page.waitForTimeout(5000);
  }

  const alldate = await page.locator(".ui-datepicker-calendar td").all();

  for (const dt of alldate) {
    const datetext = await dt.innerText();
    if (datetext === targetdate) {
      await dt.click();
      break;
    }
  }
}


test("Verify the datapicker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  let datepicker: Locator = page.locator("#datepicker");
  expect(datepicker).toBeVisible();

  // console.log(await datepicker.fill("10/05/1995")); //dd/mm/yyyy
  // second approach

  await datepicker.click()

  const Year = '2025';
  const Month = 'September';
  const date = '26';

  selecdate(Year, Month, '26', page, false);

  // const expectdate = '16/05/2026';
  // await expect(datepicker).toHaveValue(expectdate);
  await page.waitForTimeout(5000);
})