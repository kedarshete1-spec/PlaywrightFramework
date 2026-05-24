import test, {expect} from '@playwright/test';

test ('First_playwright_test', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

await page.getByText('Locate elements by their text content.');

//await page.waitForTimeout(3000);

await page.getByText(' text that you might want to locate.');

//await page.waitForTimeout(3000);

await page.getByRole('link', {name: 'link'}).click();

await page.getByText('Submit Form').click();

//await page.getByTestId('edit-profile-btn').click();

//await page.waitForTimeout(3000);

await page.getByTestId('product-price');

//await page.waitForTimeout(3000);

//await page.getByTestId('product-price');

await page.getByTestId('nav-products').click();




})