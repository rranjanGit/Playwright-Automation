const { test, expect } = require('@playwright/test');
const { only } = require('node:test');

test('Home Page Test', async({page})=>{
await page.goto('https://www.demoblaze.com/index.html')
//Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in"]').click()

//Home Page
const products =await page.$$('.hrefch')
expect(products).toHaveLength(9)

//Logout
await page.locator('#logout2').click()
});

test('Add Product to cart Test', async({Page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
//Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()

    //Add Product to cart
    await page.locator('//a[normalize-space()="Samsung glaxy s6"]').click()
    await page.locator('//a[normalize-spec()="Add to cart"]').click()

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    //Logout
await page.locator('#logout2').click()
});