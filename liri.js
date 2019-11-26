/* add code to read and set any environment variables with the dotenv package: */
require("dotenv").config();

// exapmles of different forms of url set up
// let search = 'lion';
// const url1 = 'http://www.omdbapi.com/' + '?apikey=trilogy' + '&' + 't=lion&s=&total=';
// const url2 = 'http://www.omdbapi.com/' +    '?' + "t=${search}"    + '&' + 'apikey=trilogy';
// const url3 = 'http://www.omdbapi.com/' +    '?' + 't=search'       + '&' + 'apikey=trilogy';
// const url4 = 'http://www.omdbapi.com/' +    '?' + 't=' + search    + '&' + 'apikey=trilogy';
// const url5 = 'http://www.omdbapi.com/' +    '?' + `t=${search}`    + '&' + 'apikey=trilogy';

// 

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });

const artist = "Celine Dion";
var url = "http://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
// var url = "http://rest.bandsintown.com/" + "/events?" + artist + "app_id=codingbootcamp";
  
// console.log(url);

let songName = "";

for(var i=2; i < process.argv.length; i++){

    if(i != process.argv.length - 1){
        songName += process.argv[i] + " ";
    }else{
        songName += process.argv[i];
    }
    
}
console.log(songName);

spotify.search({ type: 'track', query: songName }, function(err, data) {

    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  // console.log(data);
  console.log(data.tracks.items[0].artists[0].name); 
});



