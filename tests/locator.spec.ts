import { test, expect, Locator } from "@playwright/test"

// test("verify playwright locator", async ({ page }) => {

//   await page.goto("https://www.naturasfoods.com/");

//   const logo: Locator = page.getByAltText("logo.jpeg");

//   await expect(logo).toBeVisible();

// });

// test("verify the locator", async ({ page }) => {

//   await page.goto("https://www.naturasfoods.com/");

//   const text: Locator = page.getByText(/Natura\s+s/i);  // case sensitive caracter with reqular experession

//   expect(text).toBeVisible;  
// });

test("verify the role locator", async ({ page }) => {

  await page.goto("https://www.naturasfoods.com/");

  await expect(page.getByRole("heading", { name: /Sign up and get offers, news and more./i })).toBeVisible();
  await expect(page.getByPlaceholder("Name")).toBeVisible();
  await expect(page.getByPlaceholder("Email")).toBeVisible();
  await expect(page.getByRole("button", { name: /send/i })).toBeVisible();

});

test("verify the xpath locator", async ({ page }) => {

  // abosulute path

  // await page.goto("https://www.naturasfoods.com/");
  // const xpaths: Locator = page.locator("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]")
  // expect(xpaths).toBeVisible;

  // // relative path 
  // const logo: Locator = page.locator("//img[@alt='logo.jpeg']")
  // expect(logo).toBeVisible;

  //contains

  //Siv/h2[contains[@xpath]='H']
  await page.goto("https://www.naturasfoods.com/");
  const contains: Locator = page.locator("//div/h2[contains(normalize-space(), 'H')]");
  const counts: number = await contains.count();
  console.log(counts);
  expect(counts).toBeGreaterThan(1);

  // console.log(await contains.textContent()); // strict mode violation error

  // console.log(await contains.first().textContent())

  let products: string[] = await contains.allTextContents();

  console.log(products);

  for (let pt in products) {
    console.log(pt);
  }

})

