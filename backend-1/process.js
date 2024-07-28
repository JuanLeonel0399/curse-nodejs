console.log(process.argv); // argumentos de la linea de comandos

// salida:
process.exit(0) // 0 => exito, 1 => error

// controlar eventos de procesos
process.on('exit', () => {
  console.log('Saliendo...');
})

//current working directory
console.log(process.cwd());

//platform
console.log(process.env.NODE_ENV);