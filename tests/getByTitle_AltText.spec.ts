import {test, expect} from '@playwright/test';

test ('First_playwright_test', async ({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

/*  // getByAltText() Locators   -- Locate elements (usually images) by their alt text.

await page.getByAltText('logo image').click;

await page.getByAltText('logo image', {exact: true}); */

// getByTitle() Locators   --   Locate elements by their title attribute.

await page.getByTitle('Home page link');

await page.waitForTimeout(3000);

await page.getByTitle('HyperText Markup Language');

await page.waitForTimeout(3000);

await page.getByTitle('Tooltip text');

await page.waitForTimeout(3000);

await page.getByTitle('Click to save your changes');

await page.waitForTimeout(3000);

})