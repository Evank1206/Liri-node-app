const axios = require("axios");

// const keys = require("./keys");
// const spotify = new Spotify(keys.spotify)

const artist = "Celine+Dion";
var url = "http://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(url).then(function (response) {
  // console.log(response);
})

// console.log(url);

// let songName = "";

// for (var i = 2; i < process.argv.length; i++) {

//   if (i != process.argv.length - 1) {
//     songName += process.argv[i] + " ";
//   } else {
//     songName += process.argv[i];
//   }

// }
// // console.log(songName);

// spotify.search({ type: 'track', query: songName }, function (err, data) {

//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

//   // console.log(data);
//   // console.log(data.tracks.items[0].artists[0].name);
// });