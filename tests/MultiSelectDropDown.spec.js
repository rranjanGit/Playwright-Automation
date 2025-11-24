const { test, expect } = require('@playwright/test');

test('HandleMultiSelectDropDown ', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/")

//Select Multi options from multi select dropdown

await page.selectOption('#colors',['Blue','Red','yellow'])

//Assertions
// 1) check number of options in dropdown

// const options = await page.locator('#colors option')
// await expect(options).toHaveCount(5);

// 2) check number of options in dropdown using js array
// const options = await page.$$('#colors option')
// console.log("No of Options:",options.length)
// await expect(options.length).toBe(7);

//3) check presence of value in drop down

const content =await page.locator('#colors').textContent()
await expect(content.includes('Blue')).toBeTruthy();
await expect(content.includes('Black')).toBeFalsy();


await page.waitForTimeout(3000)


})