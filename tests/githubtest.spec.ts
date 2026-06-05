import { test, expect } from '@playwright/test';

test('GitHub should have the correct title', async ({ page }) => {
  await page.goto('https://github.com');
  await expect(page).toHaveTitle('GitHub: Where the world builds software');
});