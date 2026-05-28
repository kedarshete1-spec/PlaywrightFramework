        import { describe, it, expect } from 'playwright/test';

describe('GitHub', () => {
  it('should have the correct title', async ({ page }) => {
    await page.goto('https://github.com');
    await expect(page).toHaveTitle('GitHub: Where the world builds software');
  });
});