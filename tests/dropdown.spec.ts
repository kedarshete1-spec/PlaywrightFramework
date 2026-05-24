import {test, expect} from 'playwright/test';

test('Dropdown', async ({page}) => {
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', {name: 'Drop-Down'}).click();
    const dropdown = page.locator('[id="fruits"]');   
    await dropdown.selectOption('2');
    await expect(dropdown).toHaveValue('2');


  // await dropdown.selectOption({label: 'Apple'}); 
   // await expect(dropdown).toHaveValue('1');

   await dropdown.selectOption({index: 3});
   await expect(dropdown).toHaveValue('3');


   
});
