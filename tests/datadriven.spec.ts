import { test, expect } from '@playwright/test';

let searchitem = ['laptop', 'monitor']

// for (const item of searchitem) {
//   test(`search for ${item}`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator('#small-searchterms').fill(item);
//     await page.locator("input[value = 'Search']").click();
//     await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
//   });
// }


// searchitem.forEach((item)=> {
//   test(`search for ${item}`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator('#small-searchterms').fill(item);
//     await page.locator("input[value = 'Search']").click();
//     await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
//   });
// });


test.describe("test", async () => {
  searchitem.forEach((item) => {
    test(`search for ${item}`, async ({ page }) => {
      await page.goto('https://demowebshop.tricentis.com/');
      await page.locator('#small-searchterms').fill(item);
      await page.locator("input[value = 'Search']").click();
      await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
    });
  });
})
