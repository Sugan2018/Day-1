import {expect, test} from "@playwright/test";
test("First day - Playwright", async({page})=>{
    await page.goto("http://www.amazon.com")
    const url = await page.url()
    await expect(page).tohaveURL("http://www.amazon.com")
    //await expect(page).tohavetitle()
    console.log(url)
    const title = await page.title()
    console.log(title);
})