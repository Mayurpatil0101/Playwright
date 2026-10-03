import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table');
  await page.getByRole('link', { name: 'SUT' }).click();
  await expect(page.locator('#home-header')).toMatchAriaSnapshot(`
    - alert:
      - heading "Automation Testing Practice WebSite for QA and Developers" [level=1]
      - heading "Free Test Automation Practice Website for Selenium, Playwright, Cypress, WebdriverIO, and Postman | Web UI and REST API Testing Example" [level=2]
      - link "Test Cases":
        - /url: /test-cases
      - link "API Testing":
        - /url: /notes/api/api-docs/
      - link "Xpath / Css":
        - /url: /xpath-css-tester
      - textbox "Search an example..."
      - button "Search"
    `);
  await expect(page.getByRole('link', { name: 'JavaScript Dialogs' })).toBeVisible();
});