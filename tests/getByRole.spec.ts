import  {test, expect} from '@playwright/test';

 test ('first_playwright_test', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

// Assertions 

await expect (page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html'); 

//await expect (page).toHaveValue ('For Selenium, Cypress & Playwright');


await page.waitForTimeout(3000);

await page.getByRole('button', {name: 'Primary Action'}).click();

await page.waitForTimeout(3000);

await page.getByRole ('button',{name: 'Toggle Button'}).click();

await page.waitForTimeout(3000);

await page.getByRole('textbox', {name: 'username'}).fill('kedar shete');

await page.waitForTimeout(3000);

await page.getByRole('menuitem',{name: 'Home'}).click(); 

//await page.waitForTimeout(5000);

await page.getByRole ('menuitem', {name: 'Products'}).click();

//await page.waitForTimeout(5000);

await page.getByRole ('menuitem', {name: 'Contact'}).click();

await page.waitForTimeout(3000);

await page.getByRole('checkbox', {name:  'Accept terms'}).click();

//await page.pause();


})