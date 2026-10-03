import { test, expect } from "@playwright/test";
import fs from 'fs';

const data = "./testdata/data.json";

const readdata: any = JSON.parse(fs.readFileSync(data, 'utf-8'));


// const data: string[][] = [['laura.taylor1234@example.com', 'test123', 'valid'],
// ['demo@gmail.com', 'test123', 'invalid'], ['', '', 'invalid']];


test.describe("verify the details", () => {
  for (const [email, password, validity] of readdata) {

    test(`validatig the ${email} and ${password}`, async ({ page }) => {
      await page.goto('https://demowebshop.tricentis.com/');

      await page.locator(".ico-login").click();
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[value = 'Log in']").click();


      if (validity.toLowerCase() === 'valid') {
        const logout = page.locator('a[href="/logout"]');
        await expect(logout).toBeVisible({ timeout: 5000 });
      } else {

        const loginun = page.locator(".validation-summary-errors");
        await expect(loginun).toHaveText("Login was unsuccessful. Please correct the errors and try again.")

        await expect(page).toHaveURL("https://demowebshop.tricentis.com/")

      }

    });

  }
});






