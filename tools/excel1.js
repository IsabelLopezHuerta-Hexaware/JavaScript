const XLSX =  require('xlsx');
const file = XLSX.readFile('datos1.xlsx')
    let data= [{
        DT_URL :'www.hexaware.com',
        DT_DEPARTURE: 'AUS', 
        DT_ARRIVAL: 'MXC'
        }]
    const ws = XLSX.utils.json_to_sheet(data)
    XLSX.utils.book_append_sheet('datos1.xlsx', ws, "sheeet3")
    XLSX.writeFile(file,'datos1.xlsx')


 /*   function LeerExcel(ruta)
{
    //variable que almacena el libro 
    const file = reader.readFile(ruta)
    let data= [{
        DT_URL :'www.hexaware.com',
        DT_DEPARTURE: 'AUS', 
        DT_ARRIVAL: 'MXC'
        }]
    const ws = reader.utils.json_to_sheet(data)
    reader.utils.book_append_sheet(file, ws, "sheeet2")
    reader.writeFile(file, ruta)
    //console.log(dataExcel);
}

//LeerExcel('datos1.xlsx');*/