import {test} from "@playwright/test";
test ("Task one - Playwright", async({page})=>{
    await page.goto("http://www.facebook.com/")
    const url = await page.url()
    console.log(url)
})