import {test,expect} from '@playwright/test';

test('Dynamic dropdown', async ({page}) =>{

await page.goto('https://letcode.in/test');

await page.getByRole('link', {name: 'Drop-Down'}).click();

const dropdown = await page.locator('#fruits');

await dropdown.selectOption({value: '3'});

await expect(page.getByText('You have selected Banana')).toBeVisible();

await dropdown.selectOption('Mango');

await expect (page.getByText('You have selected Mango')).toBeVisible();

await dropdown.selectOption({index: 3});

await expect (page.getByText('You have selected Orange')).toBeVisible();


const multidropdown = await page.locator('#superheros');

await multidropdown.selectOption(['am','aq','bw']);

await expect(page.getByText('You have selected Ant-Man')).toBeVisible();
   

const lang = page.locator('#lang').all();
await page.waitForTimeout(5000);

//await lang.selectOption('C#');

})