import {test} from "@playwright/test"

test ("Alert Handling", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.once("dialog", async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })
    const simpleAlert = await page.locator("//button[@onclick='alertbox()']");
    await simpleAlert.click();
})
