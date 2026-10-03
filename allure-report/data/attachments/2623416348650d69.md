# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reports.spec.ts >> open app1
- Location: tests\reports.spec.ts:16:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#nava')
Timeout: 5000ms
- Expected  - 1
+ Received  + 2

-  PRODUCT STORES
+
+       PRODUCT STORE

Call log:
  - Expect "toHaveText" locator('#nava') with timeout 5000ms
  - waiting for locator('#nava')
    13 × locator resolved to <a id="nava" href="index.html" class="navbar-brand">…</a>
       - unexpected value "
      PRODUCT STORE"

```

```yaml
- link "PRODUCT STORE":
  - /url: index.html
  - img
  - text: PRODUCT STORE
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.beforeEach('verfiy thr report', async ({ page }) => {
  4  |   await page.goto("https://www.demoblaze.com/");
  5  | });
  6  | 
  7  | test("open app", async ({ page }) => {
  8  |   await expect(page).toHaveTitle("STORE");
  9  | });
  10 | 
  11 | 
  12 | test("open app2", async ({ page }) => {
  13 |   await expect(page).toHaveURL("https://www.demoblaze.com/");
  14 | });
  15 | 
  16 | test("open app1", async ({ page }) => {
  17 |   let text = page.locator("#nava");
> 18 |   await expect(text).toHaveText(" PRODUCT STORES");
     |                      ^ Error: expect(locator).toHaveText(expected) failed
  19 | });
  20 | 
```