const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

/* fs.readdir(folder)
  .then(files => {
    files.forEach(file => {
      console.log(file);
    })
  })
  .catch(err => {
    console.error(err);
  }); */

async function ls(folder) {
  let files
  try{
    files = await fs.readdir(folder)
  } catch {
    console.error(`no se pudo leer el directorio ${folder}`);
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(`no se pudo leer el archivo ${filePath}`);
      process.exit(1)
    }

    const isDirectory = stats.isDirectory();
    const symbol = isDirectory ? '📂' : '📋';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();
    return `${symbol} ${filePath.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified} `
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.table(fileInfo))
}

ls(folder)

