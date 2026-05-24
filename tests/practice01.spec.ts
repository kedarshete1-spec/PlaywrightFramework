import {test, expect} from '@playwright/test';
test('Handle Static Dropdown', async({page}) =>
{
   
await page.goto('https://letcode.in/test');
   // console.log('Hello Playwright');
   await page.getByRole('link', {name: 'Drop-Down'}).click();

   //1st approach to select dropdown
   const dropdown= await page.locator('#fruits');
   await dropdown.selectOption({value: '3'});
   await expect(page.getByText('You have selected Banana')).toBeVisible();
   //await page.pause();
   await dropdown.selectOption('Mango');
   await expect(page.getByText('You have selected Mango')).toBeVisible();
   await dropdown.selectOption({index: 3});
   await expect(page.getByText('You have selected Orange')).toBeVisible(); 
   
   await page.waitForTimeout(3000);

    
    const selectMultiOpt = page.locator('#superheros');
    await selectMultiOpt.selectOption(['am', 'aq', 'ta']); // select by value
    await page.pause();
    await expect(page.getByText('You have selected Ant-Man')).toBeVisible();
    await page.waitForTimeout(3000);
});

/*  
Diksha Jambhulkar
2:59 PM
import {test, expect} from '@playwright/test';

test('Handle Child Window', async({page, context}) =>{

    await page.goto('https://letcode.in/window');
    console.log(page.url());

    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByLabel('Goto Home').click()

    ]);
    await page.waitForTimeout(5000);
    await newPage.waitForLoadState();
    console.log(newPage.url());
    await newPage.locator('[routerlink="/contact"]').click();
    await expect(newPage.getByRole('heading', {name: 'Koushik Chatterjee'})).toBeVisible();
    await page.close();

});
import {test, expect} from '@playwright/test';

test('Handle Frame', async({page, context}) =>{
    await page.goto('https://letcode.in/test');
    await page.getByRole('link', {name: 'Inner HTML'}).click();
    
    const frame1= page.frameLocator('#firstFr');
                 
    await frame1.getByPlaceholder('Enter name').fill('Diksha');

    console.log(await frame1.getByPlaceholder('Enter name').inputValue());
    await expect(frame1.getByPlaceholder('Enter name')).toHaveValue('Diksha');
    await page.waitForTimeout(5000); 

    await frame1.getByPlaceholder('Enter email').fill('Nandeshwar');
    console.log(await frame1.getByPlaceholder('Enter email').inputValue());
    await expect(frame1.getByPlaceholder('Enter email')).toHaveValue('Nandeshwar');
    await page.waitForTimeout(5000); 

    //nested iframe
    const frame2= frame1.frameLocator('[src="innerframe"]');
    await frame2.locator('[name="email"]').fill('playwright@test.com');
    console.log(await frame2.locator('[name="email"]').inputValue());
    await expect(frame2.locator('[name="email"]')).toHaveValue('playwright@test.com');
    await page.pause(); 



});


/* await page.frameLocator('#firstFr')
    .getByPlaceholder('Enter name').fill('Playwright Frame');
    await page.waitForTimeout(5000);*/

bhushan patil
3:00 PM
import {test, expect} from '@playwright/test';


test('File Uploads', async ({page}) => {

await page.goto('https://letcode.in/file');

await page.setInputFiles('input[type="file"]', 'C:/Users/HP/Downloads/sample.xlsx');

await expect(page.getByText('sample.xlsx')).toBeVisible();

await page.waitForTimeout(5000); // Wait for 2 seconds to observe the uploaded file

});


test('File Downloads', async ({page}) => {

await page.goto('https://letcode.in/file');

const [download] = await Promise.all([     //const is a type and download is variable
page.waitForEvent('download'),
await page.getByRole('link', {name: 'Download Excel'}).click()

]);

await download.saveAs('downloads/excel-download.xlsx');

await page.waitForTimeout(5000); // Wait for 2 seconds to observe the downloaded file

});

/*test.only('File Uploads without Input tag', async ({page}) => {

await page.goto('https://trace.playwright.dev/');

const [filechooser] = await Promise.all([

page.waitForEvent('filechooser'),
await page.getByRole('button', {name: 'Select file'}).click()

]);

await filechooser.setFiles('C:/Users/Admin/Downloads/trace.zip');

await page.waitForTimeout(5000); // Wait for 2 seconds to observe the uploaded file

await expect(page.locator('.title').first()).toContainText('HandleAlert.spec.ts');

//await expect(page.getByText('HandleAlert.spec.ts')).toBeVisible();


});
*/ 