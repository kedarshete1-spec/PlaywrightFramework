import {test, expect} from '@playwright/test';

test('Simple Alert', async({page}) =>{

    await page.goto('https://letcode.in/alert');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.getByRole('button', {name: 'Simple Alert'}).click();
    await page.waitForTimeout(5000);

});

test('Confirm Alert', async({page}) =>{

    await page.goto('https://letcode.in/alert');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    await page.locator('#confirm').click();
    await page.waitForTimeout(5000);

});

test('Prompt Alert', async({page}) =>{

    await page.goto('https://letcode.in/alert');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Playwright Alert');
    });

    await page.getByRole('button', {name: 'Prompt Alert'}).click();
    await page.waitForTimeout(5000);
    await expect(page.locator('#myName')).toContainText('Playwright Alert');


});

test('Modern Alert', async({page}) =>{

    await page.goto('https://letcode.in/alert');

    await page.getByRole('button', {name: 'Modern Alert'}).click();
    console.log(await page.locator('.modal-content').textContent());

    await page.locator('.modal-close').click();
    await page.waitForTimeout(5000);




}); 

test.only('simple alert', async({page})=>{

await page.goto('https://letcode.in/alert');
page.on('dialog', async dialog =>{
    console.log(dialog.message);
    await dialog.accept();
})

await page.getByRole('button', {name: 'Simple Alert'}).click();

})
