const { test, expect } = require('@playwright/test');

test('handle Inputbox', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Inputbox  -firstName
    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();

    await page.locator("//input[@id='name']").fill("Rohit")
    //page.fill("//input[@id='name']",'Rohit')

    await page.waitForTimeout(5000);  //pausing code


})
