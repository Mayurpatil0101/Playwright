import { test, expect } from '@playwright/test';

test.describe("group1", () => {
  test("test1", () => {
    console.log("verify the group..");
  })
});

test.describe("group2", () => {
  test("test1", () => {
    console.log("verify the group2..");
  })
})