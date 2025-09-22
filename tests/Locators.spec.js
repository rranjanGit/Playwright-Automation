//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    //click on login button - proerty
    //await page.locator('id="login2').click()
    await page.click('id=login2')

    //Provide username --css
    //await page.locator('#loginusername').fill("pavanol")

    // pass the value along with locator
    await page.fill('#loginusername','pavanol')
    //await page.type('loginusername','pavanol')

    //provide password --css
    await page.fill("input[id='loginpassword']",'test@123')

    //Click on login button -xpath
    
    //button[normallize-space()='Log in']
    await page.click("//button[normalize-space()='Log in']")

    //Verify logout link presence -xpath
    const logoutlink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutlink).toBeVisible();
    await page.close()

})
