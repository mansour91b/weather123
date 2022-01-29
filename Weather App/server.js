//import fetch from 'node-fetch';
const fetch = require('node-fetch');
// server.js
// bookstore-app
//Import modules
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const async = require('async');
// make express
const app = express();
app.use(cors());

// for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use to display images and css
app.use(express.static('public'));


// with customer details retrieved from the form
app.post('/apikey', async (req, res) => {
// get customer details from body parser
    q = [43.4959805,-80.5220708],
    apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=848e4c9efef048e494f100521210205&q=${q}&days=3&aqi=no&alerts=no`);
        responseData = await apiResponse.json();
        //alert(JSON.stringify(responseData));
        console.log(responseData);


res.json(responseData);

})

// set port and listen to connections
const port = 5000; //5000;
app.listen(port, () => {
console.log(`Bookstore App started on port ${port}`);
});