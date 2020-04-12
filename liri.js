// reuire the npm package
var Spotify = require('node-spotify-api');
// const axios = require("axios");
// import the key.js
var keys = require("./keys.js");
// 
require("dotenv").config();

// exicuting spotify userID & spotify secret
// const spotify = new Spotify(keys.spotify);
// console.log(keys.spotify.id);

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
// console.log(keys.spotify.id);
// console.log(keys.spotify.secret);

const song = "west life";
/* Currently there are two methods available, SEARCH & REQUEST */
spotify.search({
  type: 'track',
  query: song
}, function (err, data) {
  if (err) {
    return console.log('Here Error Massag from consle.log: ' + err);
  }

  // console.log("Song Name: " + data.tracks.items[0].name);
  // console.log("Artist name: " + data.tracks.items[0].album.artists[0].name); //array
  // console.log("IMG URL: " + data.tracks.items[0].album.images);
  // console.log("The song link: " + data.tracks.items[0].external_urls.spotify); //obj
  // console.log("Album Name: " + data.tracks.items[0].album.name);
  // console.log("Released Date: " + data.tracks.items[0].album.release_date);

  for (i = 0; i < data.tracks.items.length; i++) {
    console.log("...................................................");
    console.log("Song Name: " + data.tracks.items[i].name);
    console.log("Artist/Band Name name: " + data.tracks.items[i].album.artists[0].name);
    console.log("IMG URL: " + data.tracks.items[i].album.images);
    console.log("The song link: " + data.tracks.items[i].external_urls.spotify);
    console.log("Album Name: " + data.tracks.items[i].album.name);
    console.log("Released Date: " + data.tracks.items[i].album.release_date);

  }


});



