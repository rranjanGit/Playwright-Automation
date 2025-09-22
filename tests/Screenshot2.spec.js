const { test, expect } = require('@playwright/test');

test('Test', async({page})=>{
await page.goto('https://www.demoblaze.com/index.html')
//Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('button', { name: 'Log in' }).click()

});