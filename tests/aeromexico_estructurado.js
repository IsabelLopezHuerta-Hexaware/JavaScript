const {By,Key,Builder, WebDriver} = require("selenium-webdriver");
require("chromedriver");
const url ="https://www.volaris.com/";
const orgn= Math.floor(Math.random()*128);
const getElementBy = async (locatorType, locator, driver) => {
    switch (locatorType) {
        case "id":
            return await driver.findElement(By.id(locator));
            break;
        case "name":
            return await driver.findElement(By.name(locator));
            break;
        case "css":
            return await driver.findElement(By.css(locator));
            break;
        case "xpath":
            return await driver.findElement(By.xpath(locator));
            break;
        case "class":
            return await driver.findElement(By.className(locator));
            break;
        default:
            break;
    }
}


const setorigin = async(driver) =>{
    const origen = await getElementBy("xpath","//div[@class='col btnSearch SearchOrigin']", driver);
    origen.click();
    await driver.sleep(5*1000);
    //ver como cambiar esto haciendo una funcion getElementSBy
    driver.findElements(By.className("row row-spec ng-star-inserted")).then(function(elements)
    {
        console.log(elements.length);
        for(var i=0;1<elements.length; i++){
            elements[i].getText().then(function(text){
                console.log(text);
            })
        };
    });
    await driver.sleep(3*1000);
    const ori = await getElementBy("xpath","(//li[@class='row row-spec ng-star-inserted'])["+orgn+"]", driver);
    ori.click();
    await driver.sleep(3*1000);
    //const close = await getElementBy("xpath","//mat-icon[@aria-label='Close']",driver);
    //close.click();
    //await driver.sleep(3*1000)
}

const setdest = async (driver) => {
    const dest = await getElementBy("xpath","//div[@class='col btnSearch SearchDestination']",driver);
    dest.click();
    await driver.sleep(5*1000);
    driver.findElements(By.className("row row-spec ng-star-inserted")).then(function(elements)
    {
        console.log(elements.length);
        for(var i=0;1<elements.length; i++){
            elements[i].getText().then(function(text){
                console.log(text);
            })
        };
    });
    await driver.sleep(3*1000);
    const dst= await getElementBy("xpath","(//li[@class='row row-spec ng-star-inserted'])[2]",driver);
    dst.click();
    await driver.sleep(5*1000)
}

const FechaDePartida = async (driver) =>{
   //const part = await getElementBy("xpath","//td[not(contains(@class, 'disabled')) and contains(@class, 'customfare')]",driver);
   //part.click();
   await driver.findElement(By.xpath("//td[not(contains(@class, 'disabled')) and contains(@class, 'customfare')]")).click();
}

const FechaDeRegreso = async (driver) =>{
    //const Regreso = await getElementBy("xpath"," //td[not(contains(@class, 'disabled')) and contains(@class, 'returnCustomfare available')]", driver);
    //Regreso.click();
    await driver.findElement(By.xpath(" //td[not(contains(@class, 'disabled')) and contains(@class, 'returnCustomfare available')]")).click();
}

const pasajeros = async(driver)=> {
    await driver.findElement(By.xpath("//span[@aria-label='arrow drop down']")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("(//button[@type='button'])[4]")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("//span[@aria-label='arrow drop up']")).click();
    await driver.sleep(3*1000)
}

async function test(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.sleep(10*1000);
    setorigin(driver);
    await driver.sleep(2*1000);
    setdest(driver);
    await driver.sleep(5*1000);
    FechaDePartida(driver);
    await driver.sleep(3*1000);
    FechaDeRegreso(driver);
    await driver.sleep(3*1000);

}



test()

/**Notas de problemas 
 * 
 * ¿como recueperar los datos, y dividirlos?, es  decir, quedarme unicamente con el nombre de los areropuestos y meterlos en un arreglo global no local 
 * ¿como mover las fechas?, los locators no son predecibes creo 
*/