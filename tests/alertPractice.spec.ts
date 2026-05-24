import {test, expect} from '@playwright/test';

test ('Simple alert', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    page.on('dialog', async dialog => {   // Simple alert  {ok}
        console.log(dialog.message());
        await dialog.accept();

    })

    await page.getByRole('button', {name: 'Simple Alert'}).click();
    await page.waitForTimeout(5000);

});

test ('confirm_alert', async ({page})=>{  // confirmation alert {save, cancel}

await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

page.on('dialog', async dialog =>
{
console.log(dialog.message());
//await dialog.accept();
await dialog.dismiss();

})
 await page.getByRole('button', {name: 'Confirmation Alert'}).click();
 await page.waitForTimeout(3000);

})

test('prompt_alert', async ({page}) =>{  // prompt alert { text, save, cancel}

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    page.on('dialog', async dialog =>{
    console.log(dialog.message());
    await dialog.accept('kedar shete');

    })

    await page.locator('#promptBtn').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('#myName')).toContainText('kedar shete');
})