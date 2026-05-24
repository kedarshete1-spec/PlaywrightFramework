import {test, expect} from '@playwright/test';

test('RadioButton', async ({page}) => {

    await page.goto('https://letcode.in/radio');

    await page.locator('.field').locator('#yes').check();

    await page.locator ('.field').filter ({hasText: 'Select any one'}).getByRole('radio', {name: 'no'}).check();

   // await page.waitForTimeout(3000);

     await page.locator('.field').filter({hasText: 'Cofirm you can select only one radio button'}).locator('#one').click();

     console.log(await page.locator('.field').locator('#one').isEnabled());
    // await page.waitForTimeout(5000);


    await page.locator('.field').locator('#nobug').check(); 
    await page.locator('.field').locator('#bug').check();

   await page.locator('.field').locator('#notG').click();

  console.log(await page.locator('.field').locator('#maybe').isDisabled());
   // await page.waitForTimeout(5000); 

    await page.getByLabel('Remember me').uncheck();
   console.log (await page.getByLabel('Remember me').isChecked());
    await page.waitForTimeout(5000);
     await page.getByLabel('Remember me').check();
   await expect(page.getByLabel('Remember me')).toBeVisible(); 
  await page.getByLabel(' I agree to the ').check();
 // await expect (page.getByLabel(' I agree to the ')).toBeChecked();
  await page.waitForTimeout(3000);
 //console.log (await expect (page.getByLabel(' I agree to the ')).not.toBeChecked());



})