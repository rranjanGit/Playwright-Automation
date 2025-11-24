// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('User registration test on PlayOneReal', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://app.playonereal.com/agent-signup');

  // Fill out the registration form
  await page.fill('input[placeholder="Enter your first name"]', 'Rohit');
  await page.fill('input[placeholder="Enter your last name"]', 'Ranjan');
  await page.fill('input[placeholder="eg. johndoe9"]', 'rohit123');
  await page.fill('input[placeholder="johndoe@example.com"]', 'rohit123@testmail.com');
  await page.fill('input[placeholder="Choose password"]', 'Password@123');
  await page.fill('input[placeholder="Confirm password"]', 'Password@123');

  // Check consent checkboxes
  const checkboxes = await page.$$('input[type="checkbox"]');
  for (const checkbox of checkboxes) {
    await checkbox.check();
  }

  // Click Create Account button
  //await page.click('button:has-text("Create Account")');
  await page.click('text=Create Account'); 

  // Wait for success or error message (example)
  await expect(page.locator('text=Verification Email Sent')).toBeVisible({ timeout: 10000 });
});


test('OrangeHRM', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Fill out the registration form
  await page.locator('//input[@name="username"]').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123')
  await page.locator("//*[@type='submit']").click();
  await expect(page).toHaveTitle('OrangeHRM');
  await page.waitForTimeout(3000)
});

test('OrangeHRM', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Fill out the registration form
  await page.locator('//input[@name="username"]').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123')
  await page.locator("//*[@type='submit']").click();
  await expect(page).toHaveTitle('OrangeHRM');
  await page.waitForTimeout(3000)
});


