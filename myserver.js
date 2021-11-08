const express = require('express')
const app = express()
const port = 3000


const users =[
    {
        id: 0,
        name: "Beenysh",
        email: "beenysh@gmail.com"
    },
    {
        id: 1,
        name: "Mehwysh",
        email: "mehwysh@gmail.com"
    },
    {
        id: 2,
        name: "Omar",
        email: "omar@gmail.com"
    }
]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)    //when we use params we basically get an object on our page 
                          //from client's response
})

app.get('/flights/:from-:to', function (req, res) {
  res.send(req.params)    //for params use: aA - zZ and 0-9, also . and -
                          
})

app.get('/plantae/:genus.:species', function (req, res) {
  res.send(req.params)    //for params use: aA - zZ and 0-9, also . and -
                          
})

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

app.get('/users', (req, res) => {
    res.json(users)
  })

app.get('/blog', (req, res) => {
    res.send('<h1>Stumble Upon Words</h1>')
  })

  app.get('/queryString', (req, res) => {
    console.log(req.query)
    res.send(req.query)
  })
  
  app.get('/users/:id', (req, res) => {
    console.log(req.params)
    const {id} = req.params
    res.json(users[id])
  })

//   app.get('/blog/:id', (req, res) => {
//     console.log(req.params)
//     res.json(Number(req.params.id))
//   })

  app.post('/blog', (req, res) => {
    res.send('<h1>Stumble Upon Words</h1>')
    console.log(res)
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})