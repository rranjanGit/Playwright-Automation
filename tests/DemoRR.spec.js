const { test, expect } = require('@playwright/test');

test('User registration ', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder("Username").fill("Admin")
  await page.getByPlaceholder("Password").fill("admin123")
  await page.locator("//button[@type='submit']").click()
  await page.waitForTimeout(3000)
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

});