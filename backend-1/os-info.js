// modulos nativos

const os = require('node:os'); // forma 1 => os.platform();

// import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'os'; // forma 2 archivo.mjs
// import os from 'node:os'; // forma 3 archivo.mjs

console.log(os.platform()); //nombre del SO
console.log(os.release()); //version
console.log(os.arch()); //arquitectura
console.log(os.cpus()); //procesadores
console.log(os.freemem() / 1024 / 1024); // memoria libre
console.log(os.totalmem() / 1024 / 1024); //memoria total
console.log(os.uptime() / 60 / 60); //tiempo de ejecucion
