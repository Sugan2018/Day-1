import {test} from "@playwright/test";
test("Element Handle", async({page})=>{
    await page.goto("http://www.facebook.com");
    const email = await page.locator("//input[@id='email']");
    await email.fill("abcdefg");
    const pwd = await page.locator("//input[@name='pass']");
    await pwd.fill("abcd@123");
    const loginBtn = await page.locator("//button[@name='login']");
    await loginBtn.click();
}
)