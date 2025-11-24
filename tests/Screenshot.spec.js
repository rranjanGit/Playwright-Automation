const { test, expect } = require('@playwright/test');

test('Page Screenshot ', async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage1.png'})

});

test('Full Page Screenshot ', async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'FullPage1.png',fullPage:true})

});


test('Element Screenshot ', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({ path:'tests/screenshots/'+Date.now()+'Macbook1.png'})
    //await page.screenshot({ path:'tests\screenshots/'+Date.now()+'Macbook.png',fullPage:true})

});