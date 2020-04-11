const axios = require("axios");

const artist = "Celine Dion";
var url = "http://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(url).then(function (response) {

  // console.log(response.data[0]);
  console.log("artist: " + response.data[0].artist.name);
  console.log("artist: " + response.data[0].artist.thumb_url);
  console.log("artist: " + response.data[0].artist.url);

  /*important*/
  // console.log("Array: " + response.data[i].offers[0].url);
  // console.log("Ticket: " + response.data[i].offers[0].status, i)

  for (i = 1; i < response.data.length; i++) {
    // console.log(response.data[i], i);
    // const artist = response.data[i].lineup;
    console.log(".....................................");
    console.log("Artist Name: " + response.data[i].lineup, i);
    console.log("Date&Time: " + response.data[i].datetime, i);
    console.log("Staduim: " + response.data[i].venue.name, i);
    console.log("city: " + response.data[i].venue.city, i);
    console.log("country: " + response.data[i].venue.country, i);

  }


})