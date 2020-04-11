const axios = require("axios");

// const keys = require("./keys");
// const spotify = new Spotify(keys.spotify)

const artist = "Celine Dion";
var url = "http://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(url).then(function (response) {

  // console.log("Artist: " + response.data[0].artist.name);
  // console.log("Image: " + response.data[0].artist.thumb_url);

  // console.log("Country: " + response.data[0].venue.country);
  // console.log("City: " + response.data[0].venue.city);
  // console.log("Stadion: " + response.data[0].venue.name);

  // console.log("ticked: " + response.data[0].offers[0].status);
  // console.log("Link for buying tickets: " + response.data[0].url);
  // console.log("Date: " + response.data[0].datetime);

  // console.log(response.data[0]);
  // console.log("artist: " + response.data[2].artist.name);
  // console.log("artist: " + response.data[2].artist.thumb_url);
  // console.log("artist: " + response.data[2].artist.url);

  /*important*/
  // console.log("Array: " + response.data[i].offers[0].url);
  // console.log("Ticket: " + response.data[i].offers[0].status, i)

  const artist = response.data[i].lineup;

  for (i = 1; i < response.data.length; i++) {
    // console.log(response.data[i], i);
    console.log("Artist Name: " + response.data[i].lineup, i);
    console.log("Date&Time: " + response.data[i].datetime, i);
    console.log("Staduim: " + response.data[i].venue.name, i);
    console.log("city: " + response.data[i].venue.city, i);
    console.log("country: " + response.data[i].venue.country, i);



    // console.log("ticked: " + response.data[i].offers[0].status);

  }


})