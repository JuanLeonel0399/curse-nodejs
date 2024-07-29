const http = require('node:http')
const fs = require('node:fs')
const port = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  /* Las cabeceras para las imagenes => res.writeHead(200, { 'Content-Type': 'image/extension' }) */
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Bienvenido a la página de inicio')
  }else if(req.url === '/imagen-dc.jpg'){
    fs.readFile('./dc-wonder.jpg', (err, data) => {
      if(err){
        res.statusCode = 500
        res.end('500:Internal server error')
      }else{
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${server.address().port}`)
})




/* para ver siempre los cambios (restaurar procesos) => node --watch archivo.js  ✔️

una alternativa => nodemon => npm install nodemon -D => nodemon archivo.js
*/