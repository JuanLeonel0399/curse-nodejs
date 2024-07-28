const http = require('node:http')
const { findAvailablePort } = require('./port-ava.js')

// Port con variable de entorno
const port = process.env.PORT ?? 3000

// crear el servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World')
})


// escuchar el servidor (donde se leva el puerto)
// '127.0.0.1' => opcional
// Puerto 0 => Asigna un puerto aleatorio
// server.address().port => Asigna el puerto al que escucha el servidor
/* server.listen(0, () => {
  console.log(`Server running on port http://localhost:${server.address().port}`)
}) */

findAvailablePort(port).then((port) => {
  server.listen(port, () => {
    console.log(`Server running on port http://localhost:${server.address().port}`)
  })
})

//lamada en node con una variable de entorno
//PORT=3000 node http.js