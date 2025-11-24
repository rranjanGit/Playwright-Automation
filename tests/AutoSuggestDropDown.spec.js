const { test, expect } = require('@playwright/test');

test('AutoSuggestDropDown ', async ({ page }) => {
await page.goto("https://www.redbus.in/") 

await page.locator("//*[text()='From']").fill('Delhi')
await page.waitForSelector("")
const fromCityOptions = await page.$$()

for(let option of fromCityOptions)
{
    const value = await option.textContent()
    console.log(value);
}

await page.waitForTimeout(5000)
})