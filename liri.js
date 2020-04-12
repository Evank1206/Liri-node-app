
var Spotify = require('node-spotify-api');
// const axios = require("axios");

var keys = require("./keys.js");
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

const song = "I want it that away";

spotify.search({ type: 'track', query: song }, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  // console.log(data.tracks.items[0].album);
  // console.log("Song Name: " + data.tracks.items[0].name);
  // console.log("Artist name: " + data.tracks.items[0].album.artists[0].name); //array
  // console.log("The song link: " + data.tracks.items[0].external_urls.spotify); //obj
  // console.log("Album Name: " + data.tracks.items[0].album.name);
  // console.log("Released Date: " + data.tracks.items[0].album.release_date);


  console.log("Artist's Image link " + data.tracks.items[0].images); //array?
});



