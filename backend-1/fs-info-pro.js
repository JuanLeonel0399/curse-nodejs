//con promise => require('node:fs/promises')
const fs = require('node:fs/promises');

console.log('Leyendo el archivo...');
fs.readFile('./arch.txt', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });


console.log('Haciendo algo cosas mietras se lee el archivo...');

console.log('Leyendo el segundo archivo...');

fs.readFile('./arch2.txt', 'utf-8',)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });


// en paralelo
Promise.all([
  fs.readFile('./arch.txt', 'utf-8'),
  fs.readFile('./arch2.txt', 'utf-8'),
]).then(([text, secondText])=>{
  console.log(text);
  console.log('--------------------');
  console.log(secondText);
})
