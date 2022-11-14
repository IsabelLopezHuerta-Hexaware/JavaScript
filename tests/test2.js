
const {By,Key,Builder, WebElement} = require("selenium-webdriver");
require("chromedriver");
let destinos = ["AIP","AMD","ATQ","IXQ"]

const dest= Math.floor(Math.random()*4);
// este genera el random que es el que se usara de origen, despues en la funcion destino sacas el elemento en la posicion y generas otro random del 0-3 y ese es el destino
async function destino(){
       
}

async function example(){

       var url = "https://rahulshettyacademy.com/dropdownsPractise/";

        //driver.maximize_window();

       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();

        await driver.get(url);
        await driver.findElement(By.name("ctl00$mainContent$chk_friendsandfamily")).click();
        await driver.findElement(By.id("ctl00_mainContent_ddl_originStation1_CTXT")).sendKeys("IXQ");
        //await getElement("id","ctl00_mainContent_rbtnl_Trip_0", driver).click();
        //await getElement("id","ctl00_mainContent_ddl_originStation1_CTXT", driver).then((el)=>(el.click()));
        //await getElement("id","ctl00_mainContent_ddl_originStation1", driver).sendKey(destino[dest]);

        //await driver.findElement(By.id("ctl00_mainContent_ddl_originStation1_CTXT")).click();
        //await driver.findElement()
       
       await driver.quit();

}

async function getElement(locatorType, locator, driver)
{
       switch(locatorType)
       {
              case "id":
                     return await driver.wait(until.elementLocated(By.id(locator)),1000);
              break;  
              case "xpath":
                     return await driver.wait(until.elementLocated(By.xpath(locator)),1000);
              break;  
              case "css":
                     return await driver.wait(until.elementLocated(By.css(locator)),1000);
              break;   
       }
}

example()