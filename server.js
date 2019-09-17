// template for Express app from documentation
const express = require('express') // use the required function to fetch Express
const app = express() // create an instance named app by invoking express

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () { // we are creating a server that is listening to port3000 for connection
  console.log('Example app listening on port 3000!')
})