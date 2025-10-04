import {test} from "@playwright/test";
test("First day - Playwright", async({page})=>{
    await page.goto("http://www.amazon.com")
    const url = await page.url()
    console.log(url)
})