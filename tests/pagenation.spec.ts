import { test, expect, Locator } from "@playwright/test";

test("verify the pagenation", async ({ page }) => {
  await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

  let hasmorepage = true;

  while (hasmorepage) {
    const rows: Locator[] = await page.locator("#example>tbody>tr").all();

    for (const row of rows) {
      console.log(await row.innerText());

      await page.waitForTimeout(3000);

      let nextbutton: Locator = page.locator("button[aria-label='Next']");

      let isdisabled = await nextbutton.getAttribute('class');

      if (isdisabled?.includes('diabled')) {
        hasmorepage = false;

      } else {
        await nextbutton.click();
      }

    }
  }

});

test("verify the filter", async ({ page }) => {

  await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

  let filter: Locator = page.locator("#dt-length-0");

  await filter.selectOption({ label: '25' });

  // filter.selectOption({value:'25'})

  const rows: Locator[] = await page.locator("#example>tbody>tr").all();
  expect(rows.length).toBe(25);

});

test.only("verify the search box", async ({ page }) => {

  await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

  let searchbox: Locator = page.locator("#dt-search-0");

  const searchtext: string = "Tiger";
  await searchbox.fill(searchtext);

  await page.pause();

  const rows: Locator[] = await page.locator("#example>tbody>tr").all();

  if (rows.length > 1) {
    for (let row of rows) {
      let texts = await row.innerText();
      if (texts.includes(searchtext)) {
        console.log("Found:", texts);
      }
    }
  } else {
    console.log("No record found");
  }

});




