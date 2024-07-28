const fs = require('node:fs/promises');

(async () => {

  console.log('Leyendo el archivo...');
  const text = await fs.readFile('./arch.txt', 'utf-8')
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });


  console.log('Haciendo algo cosas mietras se lee el archivo...');

  console.log('Leyendo el segundo archivo...');

  const text2 = await fs.readFile('./arch2.txt', 'utf-8',)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });

})();
