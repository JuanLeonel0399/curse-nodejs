const http = require('node:http')

const jsonCharmander = require('../charmanderPK.json')
const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/charmander':
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
          return res.end(JSON.stringify(jsonCharmander))
        case '/':
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
          res.end('Welcome to the homepage')
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404: Not found');
      }

    case 'POST':
      switch (url) {
        case '/pokemon':
          let body = ""
          req.on('data', (chunk) => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404: Not found');
      }
  }

};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log('Server running on port http://localhost:3000')
})