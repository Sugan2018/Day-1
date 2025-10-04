import {test} from "@playwright/test";
test ("Task Two", async({page})=>{
    await page.goto("http://www.instagram.com");
    const email = await page.locator("//input[@aria-label='Phone number, username or email address']");
    await email.fill("Sugan");
    const pwd = await page.locator("//input[@aria-label='Password']");
    await pwd.fill("123456");
    const loginBtn = await page.locator("//button[@name= 'login']");
    await loginBtn.click();
})