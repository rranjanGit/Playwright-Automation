// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('Login', async ({ page }) => {

//     await page.goto("https://katalon-demo-cura.herokuapp.com/")
//     //await page.click("//*[text()='Make Appointment']")

//     await page.getByText('Make Appointment').click();
//     await page.waitForTimeout(5000);

//      await page.getByPlaceholder("Username").fill('John Doe');
//     await page.getByPlaceholder("Password").fill('ThisIsNotAPassword');
//     await page.click('text=Login')


// })

const { test, expect } = require('@playwright/test');

test('Login to Katalon CURA Healthcare', async ({ page }) => {

    // Step 1: Go to website
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // Step 2: Click on Make Appointment button
    await page.getByText('Make Appointment').click();

    // Step 3: Enter Username
    //await page.getByPlaceholder("Username").fill("John Doe");
    await page.locator('#txt-username').fill('John Doe');
    await page.locator('#txt-password').fill('ThisIsNotAPassword');


    // Step 4: Enter Password
   // await page.getByPlaceholder("Password").fill("ThisIsNotAPassword");

    // Step 5: Click Login button
    await page.click("#btn-login");

    // Step 6: Verify successful login (appointment page)
    await expect(page.getByText("Make Appointment")).toBeVisible();
});
