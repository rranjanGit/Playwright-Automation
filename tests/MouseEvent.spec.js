const { test, expect } = require('@playwright/test');

test('Alert with ok', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

})