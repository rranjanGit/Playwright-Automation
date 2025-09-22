const { test, expect } = require('@playwright/test');

//only

/*test.only('test1', async({page})=>{
    console.log('this is test1')
});

*/

//skip
/*
test.skip('test2', async({page})=>{
    console.log('this is test2...')
});
*/

/*
test('test3', async({page, browserName})=>{
    console.log('this is test3...')
    if(browserName=='chromium')  //firebox
    {
        test.skip()
    }
});
*/

//Fixme   this is when bug is not fix by developer need to be fixed

/*test('test4', async({page})=>{
    test.fixme()
    console.log('this is test4...')
});
*/

//Fail
/*
test('test5', async({page})=>{
    test.fail()  //expectation
    console.log('this is test5...')
    expect(1).toBe(1); //2     //If both exp & Actual is failed then test pass

});
*/


/*
test('test6', async({page, browserName})=>{
    console.log('this is test6...')
    if(browserName=='firefox')  
    {
        test.fail() //expe
    }

});
*/

test('test7', async({page})=>{
    //test.slow();
    test.setTimeout(5000)
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test7...')
});



