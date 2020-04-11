// assigning  require part
const axios = require("axios");
// axios geting data part
const api_key = "trilogy";
// hard coded movie
const search = "Sweet November";
// main url
const url = "http://www.omdbapi.com/?t=" + search + "&apikey=" + api_key;
// geting data
axios.get(url).then(function (response) {
  console.log(response.data);
  console.log(response.data.Title);
  console.log(response.data.Year);
});


