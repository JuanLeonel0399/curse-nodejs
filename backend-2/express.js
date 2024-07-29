const express = require('express')
const app = express()
const jsonCharmander = require('./charmanderPK.json')
const PORT = process.env.PORT ?? 3000


//para evitar conflictos de seguridad es mejor desactivar el X-Powered-By
app.disable('x-powered-by')


/* Permitir que todas las request pasen antes de que llegue a la que especifica 
se le llama middleware (antes de que llegue a la ruta)
*/
app.use((req, res, next) => {
  // aqui aplico logica y procesos
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ""
  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()

    // esto muta el request e ingresa la informacion en el req.body
    // el req.body iria en el body de la request 
    //  app.post('/pokemon', (req, res) => {
    //    res.status(201).json(req.body)
    //  })
    req.body = data
    //next() => para que siga con las demas requests
    next()
  })
})

// el proceso anterior ⬆️ puede simplicarse de la siguiente manera
// => app.use(express.json())


// GET
app.get('/', (req, res) => {
  res.status(200).send('<h2>Hello World</h2>')
})


app.get('/pokemon/charmander', (req, res) => {
  res.status(200).json(jsonCharmander)
})


// POST
app.post('/pokemon', (req, res) => {
  // con el req.body podemos guardar la informacion en la base de datos
  res.status(201).json(req.body)
})


// este se aplica a todas las request que no existan
app.use((req, res) => {
  res.status(404).send('404: Not found')
})


// levantar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})

