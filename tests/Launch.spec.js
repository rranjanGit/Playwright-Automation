const { test, expect, chromium } = require('@playwright/test');

test('LaunchBrowser', async({page})=>{
 const browser = await chromium.launch()
const context = await browser.newContext();


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle("OrangeHRM")


await page.waitForTimeout(5000);
  

});