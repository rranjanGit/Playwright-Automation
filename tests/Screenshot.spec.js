const { test, expect } = require('@playwright/test');

test('Page Screenshot ', async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png'})

});

test('Full Page Screenshot ', async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})

});


test('Element Screenshot ', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({ path:'tests/screenshots/'+Date.now()+'Macbook.png'})
    //await page.screenshot({ path:'tests\screenshots/'+Date.now()+'Macbook.png',fullPage:true})

});