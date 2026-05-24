import {test, expect} from '@playwright/test';

test.only('First_playwright_test', async ({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

await page.getByPlaceholder('Enter your full name').fill('kedar shete');

await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('8855090370');

await page.getByPlaceholder('Type your message here...').fill('shivalay aprt. kharadi Pune');

await page.getByPlaceholder('Search products...').fill('iphone 17 pro');

await page.getByRole('button', {name: 'Search'}).click();

await page.waitForTimeout(3000);



})