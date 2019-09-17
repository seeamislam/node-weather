// template for Express app from documentation
const express = require('express') // use the required function to fetch Express
const app = express() // create an instance named app by invoking express

app.set('view engine', 'ejs') // set up EJS which allows us to interact with variables and then dynamically create our HTML page

app.get('/', function (req, res) {
    app.get('/', function (req, res) {
        res.render('index');
      })
})

app.listen(3000, function () { // we are creating a server that is listening to port3000 for connection
  console.log('Example app listening on port 3000!')
})