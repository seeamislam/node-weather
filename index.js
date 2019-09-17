const request = require('request'); // making an API call using request

let apiKey = '927b698f4cabb4200220709d2630004b'; // create a variable for the API key
let city = 'brampton'; // created a city which we would like to pass
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// created a variable and assigned it to the OpenMaps URL with its two required parameters (as shown in the documentation)


request(url, function (err, response, body) { // We pass in a url, and request returns a callback function with three arguments: err, response, and body.
  if(err){
    console.log('error:', error); // We check for an error in our request. If there is one, we log the error and are done.
  } else {
    console.log('body:', body); // If there is no error, we log the entire contents of the response body.

  }
});