const { test, expect } = require('@playwright/test');

test('DropDown ', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/")
//Multiple ways to seelct option from the dropdown

//await page.locator('#country').selectOption({label:'India'}); //label/visible text
//await page.locator('#country').selectOption('India');  //visiable text
// await page.locator('#country').selectOption({value:'uk'}); //by using value
// await page.locator('#country').selectOption({index:'1'}); //by using index
// await page.selectOption("#country",'India');  //by text


//Assertions

//1) check number of options in drop down ---Approch-1

// const options = await page.locator('#country option')
// await expect(options).toHaveCount(10);


//2) check number of options in drop down----- Approch -2

// const options = await page.$$('#country option')
// console.log("No of Options:",options.length)
// await expect(options.length).toBe(10);


//3) check presence of value in the dropdown -- Approch 1

const content =  await page.locator('#country').textContent()
await expect(content.includes('India')).toBeTruthy();




//4) check presence of value in the dropdown -- Approch 2 -- Using looping
// const options =  await page.$$('#country option')
// for(const option of options)
// {
//  console.log(await option.textContent())
// }




await page.waitForTimeout(5000)


})
