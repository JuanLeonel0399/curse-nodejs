const path = require('node:path');

// separacion de carpetas segun el SO
console.log(path.sep); 


// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');

// nombre de un archivo (fichero)
console.log(path.basename(filePath, '.txt'));

// extensiones
console.log(path.extname(filePath));