const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const requestHandler = (req, res) => {
  if(req.url === '/lower') {
    if (req.method === 'GET') {
      res.end(data)
    } else if (req.method === 'POST') {
      req.on('data', (req, res) => {
        // do something ...
      })
    }
  }
}

const router = express.Router()

router.get('/lower', (req, res) => {
  res.send(data);
})

router.post('/lower', (req, res) => {
  // do something
})