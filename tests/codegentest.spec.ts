import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.locator('h1')).toContainText('Automation Testing Practice');
  await page.getByText('Name:').click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await expect(page.locator('#PageList2')).toContainText('Home');
});