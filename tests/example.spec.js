// @ts-check
const { test, expect } = require('@playwright/test');

test('example1', async ({ page }) => {

    await page.goto('http://localhost:8080/test.html');

   expect.soft(await page.screenshot()).toMatchSnapshot("test1.png");

   await page.goto('http://localhost:8080/test2.html');

    expect.soft(await page.screenshot()).toMatchSnapshot("test2.png");

});
