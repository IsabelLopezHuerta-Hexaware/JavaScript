//import { readFile } from 'xlsx';
const XLSX = require('xlsx');
function leerExcel(ruta)
{
    //variable que almacena el libro 
    const workbook = XLSX.readFile(ruta);
    // arreglo de las hojas
    const workbookSheets = workbook.SheetNames;

    //console.log(workbookSheets);
    //arreglo de la hoja
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    
    console.log(dataExcel);
}




leerExcel('datos1.xlsx');