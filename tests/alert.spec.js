import {test} from "@playwright/test"

test ("Alert Handling", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    
}