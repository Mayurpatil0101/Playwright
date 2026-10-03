import { test, expect, Locator } from "@playwright/test";

test("Dynamic table", async ({ page }) => {

  await page.goto("https://practice.expandtesting.com/dynamic-table");

  const table: Locator = page.locator("table.table tbody");

  expect(table).toBeVisible();

  // const header: Locator = page.locator("table.table thead th");

  const rows: Locator[] = await table.locator("tr").all();
  console.log("no of rows in table :", rows.length);
  expect(rows).toHaveLength(4);

  let cpuload = '';
  for (const row of rows) {
    const firstcell: any = await row.locator("td").nth(0).innerText();


    if (firstcell == "Chrome") {
      cpuload = await row.locator('td', { hasText: '%' }).innerText();
      console.log("cpu load :", cpuload);
      break;
    }
  }

  const chrometext: string = await page.locator("#chrome-cpu").innerText();

  if (chrometext.includes(cpuload)) {
    console.log("is equal");
  } else {
    console.log("Not equal");
  }

  expect(chrometext).toContain(cpuload);

  await page.waitForTimeout(5000);

});