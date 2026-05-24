import {test, expect} from '@playwright/test';

test ('First_playwright_Test', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.getByLabel('Email Address').fill('kedarshete1@gmail.com');

    await page.waitForTimeout(3000);

    await page.getByLabel('Password').fill('Paas@123');

   // await page.getByLabel('form-group').fill(2);
 
    await page.getByLabel (' Standard').click();

    await page.getByLabel(' Express').click();

    await page.pause();







})