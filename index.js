const request = require('request'); // making an API call using request
const argv = require('yargs').argv; // integrate yargs. Yargs works by exposing any variables we use in the console onto the argv object.

let apiKey = "12345" // create a variable for the API key
let city = argv.c || 'Brampton'; // c is the property of argv which denotes the city. If no city is inputted, use Brampton
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
// created a variable and assigned it to the OpenMaps URL with its two required parameters (as shown in the documentation)


request(url, function (err, response, body) { // We pass in a url, and request returns a callback function with three arguments: err, response, and body.
  if(err){
    console.log('error:', error); // We check for an error in our request. If there is one, we log the error and are done.
  } 
  else { // If there is no error, we log the entire content of the response body.
    let weather = JSON.parse(body) // convert the jumbled text (JSON) into a JS object. Now, we can fetch the information of the object to get what we need. 

    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`; // fetch temperature in the city we set
    console.log(message); // print the temp to the console  
  }
});

// As input, we now do node.js -c cityName
