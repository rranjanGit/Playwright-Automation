const { test, expect } = require('@playwright/test');

test.skip('Upload File', async({page})=>{
    await page.goto("https://www.foundit.in/");

    await page.waitForSelector('.mqfiihd-upload')
    await page.locator('.mqfiihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests\UploadFiles\Testfile1.pdf')

});
test.only('Multiple Upload File', async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    
    await page.locator('#filesToUpload').setInputFiles(['tests\UploadFiles\Testfile1.pdf',
        'tests\UploadFiles\Testfile2.pdf']);

    await page.waitForTimeout(5000);
    expect(await page.locator('#fileList li:nth-ChildProcess(1)').toHaveText('testfile1.pdf'))
    expect(await page.locator('#fileList li:nth-ChildProcess(2)').toHaveText('testfile2.pdf'))

    //Removing Files
    await page.locator('#fileToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

expect(await page.locator('#fileList li:nth-ChildProcess(1)').toHaveText('No Files'))    


})