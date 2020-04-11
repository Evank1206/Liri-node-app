/* exapmles of different forms of URL-SET-UP */

// let search = 'lion';
// const url1 = 'http://www.omdbapi.com/' + '?apikey=trilogy' + '&' + 't=lion&s=&total=';
// const url2 = 'http://www.omdbapi.com/' +    '?' + "t=${search}"    + '&' + 'apikey=trilogy';
// const url3 = 'http://www.omdbapi.com/' +    '?' + 't=search'       + '&' + 'apikey=trilogy';
// const url4 = 'http://www.omdbapi.com/' +    '?' + 't=' + search    + '&' + 'apikey=trilogy';
// const url5 = 'http://www.omdbapi.com/' +    '?' + `t=${search}`    + '&' + 'apikey=trilogy';

require("dotenv").config();
// reuired from npm
var Spotify = require('node-spotify-api');
const axios = require("axios");

// imported from file
var keys = require("./keys.js");

// exicuting spotify userID & spotify secret
var spotify = new Spotify(keys.spotify);
// console.log(keys.spotify.id);
// console.log(keys.spotify.secret);

// const artists = "Celion Dion"
// const url = "https://api.spotify.com/t=?" + artists +"&api_id=" + keys.spotify.id + "&albums";

// // const URL = "https://api.spotify.com/v1/playlists/{playlist_id}/tracks";

// const URL = "https://api.spotify.com/v1/" + artists + "&api_id="+keys.spotify.id+"&tracks=10";

const userID = keys.spotify.id;
const token = keys.spotify.secret;

const url = "https://api.spotify.com/v1/users/" + userID + "/playlists";

axios.get({
  url:url,
  auth: token
}).then(function(response){
  console.log(response);
  
})



/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

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



