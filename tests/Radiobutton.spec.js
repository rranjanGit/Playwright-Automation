const { test, expect } = require('@playwright/test');

test('Handle Radio Button', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Radio Button
    await page.locator("//input[@value='male']").check();  //male
   // await page.check("//input[@value='option2");
    await expect(await page.locator("//input[@value='male']")).toBeChecked();
    await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy();


    await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy();


    await page.waitForTimeout(5000);  //pausing code


})
