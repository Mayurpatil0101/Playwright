import { test, expect, Page } from '@playwright/test';

/*
open app -- beforeall

  login -->beforeeach
    find all product
  logout -->aftereach
  login -- > beforeeach
    add one product to cart
  logout -->aftereach
  

close app -- afterall
*/

// hooks methods

let page: Page;

test.beforeAll("open app", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/");
})

test.beforeAll("close app", async ({ browser }) => {
  page.close();
})

test.beforeEach("login", async () => {
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("button[onclick='logIn()']").click();
  await page.waitForTimeout(2000);
})

test.afterEach("Logout", async () => {
  await page.locator("#logout2").click();
})

// --test method

test.describe("grouping the test", async () => {
  test("No of the product", async () => {
    const products = page.locator("#tbodyid .hrefch");
    await products.count();
    await expect(products).toHaveCount(9);
  });

  test("select the product", async () => {
    await page.getByText('Samsung galaxy s6', { exact: true }).click();

    //handle alert befor click

    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toContain('Product added');
      await dialog.accept();
    });

    await page.locator('.btn-success').click();


  });
})
