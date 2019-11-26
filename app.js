// assigning  require part
const spotify = require("node-spotify-api");
const axios = require("axios");
const moment = require("moment");
const dotEnv = require("dotEnv");

// console.log(spotify);
// let spotify = {
//   id: ""
//   // secret: process.env.SPOTIFY_SECRET
// };

// axios geting data part
const api_key = "trilogy";
const search = "Sweet November";

const url = "http://www.omdbapi.com/?t="+ search + "&apikey=" + api_key;

console.log(url);

// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
    console.log(response.data.Title);
    console.log(response.data.Year);
  });


