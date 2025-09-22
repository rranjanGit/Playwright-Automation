const { test, expect } = require('@playwright/test');

test('Inner Frame', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator('productTable')

    //total number of rows and columns

    const columns = await table.locator('thead tr th')
    console.log('Numberof columns:', await columns.count()) //4
    //expect(await columns.count()).toBe(4)


    const rows= await table.locator('tbody tr')
    console.log('Numberof rows:', await rows.count()) //5
    //expect(await columns.rows()).toBe(5)
//2)Select checkbox for product 4
    /* 
    const matchedRow = rows.filter({
        has:page.locator('td'),
        hasText:'Product 4'

    })
 await matchedRow.locator('input').check()
*/

//3) select multiple products by re-usable function
//await selectProduct(rows,page,'Product 1')
//await selectProduct(rows,page,'Product 3')
//await selectProduct(rows,page,'Product 5')
/*
 await page.waitForTimeout(5000)
})
async function selectProduct(rows,page,name) {
    
const matchedRow = rows.filter({
    has:page.locator('td'),
    hasText: name

})

await matchedRow.locator('input').check()

} 
*/

//4) print all product details using loop
for(let i=0; i<await rows.count();i++)
{
    const row = rows.nth(i);
    const tds =row.locator('td')

    for(let j=0; j<await tds.count()-1;j++)
    {
        console.log(await tds.nth(j).textContent())
    }
}

//5
})