import {test,expect} from '@playwright/test';
test('File_Upload', async({page}) =>{

await page.goto('https://letcode.in/file');

await page.setInputFiles('input[type="file"]',  'C:/Users/admin/OneDrive/Desktop/RK Constructions/Cost_Estimation.docx' );

await expect(page.getByText('Cost_Estimation.docx')).toBeVisible();

await page.waitForTimeout(3000);

});

test('Download_file', async ({page}) => {

    await page.goto('https://letcode.in/file');

    const [download] =await Promise.all([
         page.waitForEvent('download'),
        await page.getByRole('link', {name: 'Download Excel'}).click(),

    ]);
await download.saveAs('downloads/excel-download.xlsx');
await page.waitForTimeout(5000); 

const [download2] = await Promise.all([
    page.waitForEvent('download'),
    await page.getByRole('link', {name: 'Download Pdf'}).click(),

]);
await download2.saveAs('downloads/pdf-download.pdf');
})