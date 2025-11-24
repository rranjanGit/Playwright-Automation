const { test, expect } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); // Incognito
  const page = await context.newPage();
  await page.goto('https://www.demoblaze.com/index.html');
  await browser.close();
})();
