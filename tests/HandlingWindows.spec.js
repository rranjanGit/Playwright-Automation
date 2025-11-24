const { test, expect, chromium } = require('@playwright/test');

test('WindowsHandle', async({page})=>{
 const browser = await chromium.launch()
const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPages=context.pages()
  console.log("No of pages created:",allPages.length())

  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page1).toHaveTitle("OrangeHRM")

  await page2.goto('https://www.orangehrm.com/');
 await expect(page1).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

});



/*   
test('Switch between multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto('https://example.com');

  // Open a new tab manually
  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');

  // Work with page1
  console.log('Page1 Title:', await page1.title());

  // Work with page2
  console.log('Page2 Title:', await page2.title());
});

*/

/*
test('Get all open pages', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  await page1.goto('https://example.com');

  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');

  // Get all open pages
  const allPages = context.pages();
  console.log('Total pages:', allPages.length);

  for (const p of allPages) {
    console.log(await p.title());
  }
});




const { test, expect } = require('@playwright/test');

test('Handle multiple windows', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');

  // Wait for new tab after clicking a link
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),      // Wait for new page event
    page.click('a[target="_blank"]'),  // Action that opens new tab
  ]);

  // Ensure the new tab is loaded
  await newPage.waitForLoadState();
  console.log(await newPage.title());  // Interact with new page
});

*/