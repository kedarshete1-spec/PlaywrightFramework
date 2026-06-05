import {test, expect} from '@playwright/test';
/*
test('simple alert', async ({page})=>{

    await page.goto('https://letcode.in/alert');
    page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();

    })
    await page.getByRole('button', {name:'Simple Alert'}).click();
    
});

test('confirm alert', async ({page})=> {

    await page.goto('https://letcode.in/alert');

    page.on('dialog', async dialog =>{
    console.log(dialog.message());
    await dialog.accept();
    })

    await page.getByRole('button', {name:'Confirm Alert'}).click();

})

test('prompt alert', async ({ page }) => {
  await page.goto('https://letcode.in/alert');

  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept('kedar');
  });
  await page.getByRole('button', { name: 'Prompt Alert' }).click();
 
});

test('modern alert', async ({ page }) => {
  await page.goto('https://letcode.in/alert');
  await page.getByRole('button', { name: 'Modern Alert' }).click();
  console.log(await page.locator('modal-content').textContent());

  await page.locator('modal-close is-large').click();
   await page.waitForTimeout(3000);
}); 
*/
// --------------------------------- --------------------------- --------------------------------

// Frame and iframe  

test('frame_practice', async ({page})=>{
await page.goto('https://letcode.in/frame');



const frame1 =page.frameLocator('#firstFr');
await frame1.getByPlaceholder('Enter name').fill('kedar');
await frame1.getByPlaceholder('Enter email').fill('shete');
console.log(await frame1.getByPlaceholder('Enter email').inputValue());
await expect(frame1.getByPlaceholder('Enter email')).toHaveValue('shete');
console.log(await frame1.getByPlaceholder('Enter name').inputValue());
await page.waitForTimeout(3000);


const frame2=frame1.frameLocator('src="innerframe"');
await frame2.getByPlaceholder('Enter email').fill('kedarshete1@gmail.com'); 
console.log(await frame2.getByPlaceholder('Enter email').inputValue()); 

});
// ---------------------------------- --------------------------- --------------------------------
//dropdown and select option

test('static dropdown', async ({page})=>{

  await page.goto('https://letcode.in/dropdowns')

  // selectOption returns a Promise of the selected value(s) — don't call .click() on it
  await page.locator('#fruits').selectOption({value: "2"}); // select by value
  await page.waitForTimeout(3000);
  await expect(page.getByText('You have selected Orange')).toBeVisible();

  await page.locator('#fruits').selectOption({index: 4}); // select by index
  
  await page.locator('#fruits').selectOption({label: 'Apple'}); // select by label
  await page.waitForTimeout(3000);    
    
  
});

//------------------ --------------------------- ------------------------------------------------------------ ----------------

// file upload

test('file upload', async ({page})=>{ 

await page.goto('https://letcode.in/file');

await page.setInputFiles('input [Type="file"]', ' C:/Users/admin/OneDrive/Desktop/21_JOB/Playwright/Class_sessions/Notes/JavaScript_Notes.docx'); 

await expect(page.getByText('sample.xlsx')).toBeVisible();

await page.waitForTimeout(5000); // Wait for 2 seconds to observe the uploaded file
}); 

// file download

test('file download', async ({page})=>{   
    await page.goto('https://letcode.in/file');

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        await page.getByRole('link', {name: 'Download Excel'}).click()
    ]); 
    // Wait for the download to complete
    const path = await download.path();
    console.log(path);
    await page.waitForTimeout(5000); // Wait for 2 seconds to observe the downloaded file
}       
);

test('flipkart', async ({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('button', {name: 'Fashion'}).click();
    await page.getByRole('button', {name: 'Jeans '}).click();
    await page.waitForTimeout(5000);
});