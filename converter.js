const XLSX = require('xlsx');

let datos = [];
let ws = [];
let i = 0;

/*----------JSON datos a exportar, cada dato corresponde a una hoja----------*/
datos[0] = [
  {"Column A":"Row 2", "Column B": "Row 2", "Column C": "Row 2" },
  {"Column A":"Row 3", "Column B": "Row 3", "Column C": "Row 3" },
  {"Column A":"Row 4", "Column B": "Row 4", "Column C": "Row 4" }
];
datos[1] = [
  {"Column A":"Row 2", "Column B": "Row 2", "Column C": "Row 2" },
  {"Column A":"Row 3", "Column B": "Row 3", "Column C": "Row 3" },
  {"Column A":"Row 4", "Column B": "Row 4", "Column C": "Row 4" }
];

/*----------El nombre que va a tener cada hoja----------*/

nameWS = [
            'WorkSheet 1', 
            'WorkSheet 2'
          ]
/*----------Crea un nuevo libro de trabajo (WorkBook)----------*/
var wb = XLSX.utils.book_new();

/*----------Crea cada una de las hojas de trabajo (WorkSheet)----------*/

for(const dato of datos){
ws[i] = XLSX.utils.json_to_sheet(dato);
XLSX.utils.book_append_sheet(wb, ws[i], nombreWS[i]);
i++;
}

/*----------Genera el Archivo .xlsx----------*/
XLSX.writeFile(wb, "json-to-excel.xlsx");
