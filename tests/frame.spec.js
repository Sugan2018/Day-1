import {test} from "@playwright/test";

test("Frane Handling", async({page}) =>{
    await page.goto("https://demo.automationtesting.in/Frames.html");

    const frame = await page.frameLocator("//iframe[@id='singlefrom']");
    const frameTxtBox = await frame.locator ("//input[@type='text']");
    await frameTxtBox.fill("First Frame");
    await page.waitForTimeout(2000)
    
})