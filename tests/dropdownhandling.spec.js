import {test} from "@playwright/test";

test("Dropdown", async({page})=>{
    await page.goto("https://letcode.in/dropdowns");
const fruits = await page.locator("//select[@id='fruits']");
await fruits.selectOption({label:"Mango"}) 
const selectedfruit = await fruits.locator("option:checked").textContent();
console.log(selectedfruit)

//await fruits.selectOption({value : "1"});
//await fruits.selectOption({index:2});
await page.waitForTimeout(1000)

const heros = await page.locator("//select[@id = 'superheros']");
await heros.selectOption([{label:"Antman"},{label:"Batman"},]);
const selectedHeros = await heros.locator("option:checked").allTextContents();
console.log(selectedHeros);
})