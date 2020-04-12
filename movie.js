// assigning  require part
const axios = require("axios");
// axios geting data part
const api_key = "trilogy";
// hard coded movie
const movie = "Sweet November";
// main url
const url = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + api_key;
// geting data from url
axios.get(url).then(function (response) {
  // console.log(response.data);
  console.log("Image: " + response.data.Poster);
  console.log("Movie Name: " + response.data.Title);
  console.log("Genre: " + response.data.Genre);
  console.log("Short-Description: " + response.data.Plot);
  console.log("Actors: " + response.data.Actors);
  console.log("Director: " + response.data.Director);
  console.log("Ratings: " + response.data.Ratings[0].Value);
  console.log("Awards: " + response.data.Awards);
  console.log("Box-Office: " + response.data.BoxOffice);
  console.log("Production: " + response.data.Production);
  console.log("Year: " + response.data.Year);

});


