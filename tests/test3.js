const {By,Key,Builder, WebDriver} = require("selenium-webdriver");
require("chromedriver");
const url ="https://www.volaris.com/";
const origen= Math.floor(Math.random()*128);
const hoy = new Date();


const FechaDePartida = async (driver) =>{
    await driver.findElement(By.xpath("//td[not(contains(@class, 'disabled')) and contains(@class, 'customfare')]")).click();
}

const FechaDeSalida = async (driver) =>{
    await driver.findElement(By.xpath(" //td[not(contains(@class, 'disabled')) and contains(@class, 'returnCustomfare available')]")).click();
}

const salida = [];


async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.sleep(10*1000)
    await driver.findElement(By.xpath("//div[@class='col btnSearch SearchOrigin']")).click();
    await driver.sleep(5*1000)
    driver.findElements(By.className("col-10 left-align")).then(function(elements)
    {
        console.log(elements.length);
        for(var i=0;1<elements.length; i++){
            elements[i].getText().then(function(text){
                salida.push(text);
                salida.push("1");
                //console.log(text);
            })
        };
    });
    console.log(salida.length);
    for(var i=0;1<salida.length; i++){
            console.log(salida[i]);
        };
    console.log(salida);
    /*await driver.sleep(3*1000)
    await driver.findElement(By.xpath("(//li[@class='row row-spec ng-star-inserted'])["+origen+"]")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("//mat-icon[@aria-label='Close']")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("//div[@class='col btnSearch SearchDestination']")).click();
    await driver.sleep(3*1000)
    driver.findElements(By.className("col-10 left-align")).then(function(elements)
    {
        console.log(elements.length);
        for(var i=0;1<elements.length; i++){
            elements[i].getText().then(function(text){
                salida.push(text);
                console.log(text);
            })
        };
    });
    console.log(salida.length);
    console.log(salida);
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("(//li[@class='row row-spec ng-star-inserted'])[2]")).click();
    await driver.sleep(5*1000)
    await FechaDePartida(driver);
    await driver.sleep(3*1000)
    await FechaDeSalida(driver);
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("//button[@class='btn-calendar d-none d-md-block mat-flat-button mat-button-base mat-secondary']")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("//span[@aria-label='arrow drop down']")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("(//button[@type='button'])[4]")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("//span[@aria-label='arrow drop up']")).click();
    await driver.sleep(3*1000)
    await driver.findElement(By.xpath("(//button[@class='btn btn-large col-12 search-btn mat-flat-button mat-button-base mat-primary'])[1]")).click();
    await driver.sleep(5*1000)
    driver.findElements(By.className("panel-open ng-star-inserted")).then(function(elements)
    {
        console.log(elements.length);
        for(var i=0;1<elements.length; i++){
            elements[i].getText().then(function(text){
                console.log(text);
            })
        };
    });*/
}


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


example()


/**** NOTAS***
 *  aeromexico
 * Al intentar desplegar el origen  con la automatizacion la pagina no lo permite, se intento realizar
 * por medio de codigo duro pero la pagina tampoco lo permite. Incluso si usas una ventana de chrome
 * abierta por medio de selenium no te permine ingresar ningun input ni en origen o destino.
*/
