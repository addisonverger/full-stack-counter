const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

var counter = 0

app.get('/value', function (req, res, nextFn) {
  console.log('HTTP request sent to GET /value')
  res.send(counter.toString())
})

app.get('/increment', function (req, res, nextFn) {
  console.log('HTTP request sent to GET /increment')
  counter ++
  res.send(counter.toString())
})

app.get('/decrement', function (req, res, nextFn) {
  console.log('HTTP request sent to GET /decrement')
  counter --
  res.send(counter.toString())
})

app.listen(3000, function () {
  console.log('The server is listening.')
})
