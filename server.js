const express = require('express') // use the required function to fetch Express
const app = express() // create an instance named app by invoking express

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); // allows us to access CSS files later
app.set('view engine', 'ejs') // set up EJS which allows us to interact with variables and then dynamically create our HTML page

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
      })

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

app.listen(3000, function () { // we are creating a server that is listening to port3000 for connection
  console.log('The app is listening on port 3000!')
})