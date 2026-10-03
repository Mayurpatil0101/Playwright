import { test, expect, Locator } from "@playwright/test";

test("Auto suggest dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table: Locator = page.locator("table[name = 'BookTable'] tbody");

  await expect(table).toBeVisible();


  const rows: Locator = table.locator("tr");

  await expect(rows).toHaveCount(7);

  const columns: Locator = rows.locator("th");

  await expect(columns).toHaveCount(4);

  const data: Locator = rows.nth(2).locator('td');

  console.log(await data.allInnerTexts());


  const allrows: Locator[] = await rows.all();

  for (const texts of allrows) {
    const cols = await texts.locator('td').allInnerTexts();
    console.log(cols);
  }

  const mukeshbooks: string[] = [];
  for (const texts of allrows.slice(1)) {
    const cells = await texts.locator('td').allInnerTexts();

    const author = cells[1];
    const book = cells[0];

    if (author == 'Mukesh') {
      console.log(`${author} \t ${book}`);
      mukeshbooks.push(book);
    }
  }

  expect(mukeshbooks).toHaveLength(2)


  let totalprice: number = 0;
  for (const texts of allrows.slice(1)) {
    const cells = await texts.locator('td').allInnerTexts();

    const price = cells[3];
    totalprice = totalprice + parseInt(price);

    console.log(totalprice);

  }



})