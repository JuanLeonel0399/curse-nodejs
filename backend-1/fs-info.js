// File System

const fs = require('node:fs');
const { promisify } = require('node:util');

const readFile = promisify(fs.readFile); //fs.readFile().then().catch()

// stats
const stats = fs.statSync('./arch.txt');


// read file
console.log('Leyendo el archivo...');
fs.readFile('./arch.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log('Haciendo algo cosas mietras se lee el archivo...');

console.log('Leyendo el segundo archivo...');
// calllback => manera asincrona
fs.readFile('./arch2.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

