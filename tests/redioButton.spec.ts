import {test,expect} from '@playwright/test';

test ('Radiobutton', async({page})=>

    {
await page.goto('https://letcode.in/radio');
await page.locator('.field').locator('#yes').check();
await page.locator('.field').filter({hasText: 'Select any one'}).getByRole('radio',{name:'Yes'}).check();
console.log(await page.locator('.field').locator('#no').isChecked());
await expect(page.locator('.field').filter({hasText: 'Select any one'}).getByRole('radio',{name:'Yes'})).toBeChecked();
await page.pause();
    })

test ('verify checkbox selection',async({page})=>{
    await page.goto('https://letcode.in/radio');
    await page.getByLabel('Remember me').uncheck();
    await expect(page.getByLabel('I agress to the fake terms and condition')).toBeChecked();
    console.log(await page.locator('#maybe').isDisabled());
    await page.pause();


    });