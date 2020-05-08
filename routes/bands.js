const express = require("express");
const router = express.Router();

// require axios npm package
const axios = require("axios");

router.get("/api/:id", (req, res) => {
  // res.send("helloo");
  console.log('lala')
  var url = "http://rest.bandsintown.com/artists/" + req.params.id + "/events?app_id=codingbootcamp";

  axios.get(url).then(reponse => {
   
    res.send(reponse.data)
     console.log(reponse.data);

  }).catch(err=>{
    res.send(err);
    
  })
  // res.send(req.params.id)v c c

});

module.exports = router;


// // hard coded artist
// const artist = "Celine Dion";
// // main url for getting data
// var url = "http://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
// // axis for pull data from up-url
// axios.get(url).then(function (response) {
//   // main data response
//   // console.log(response.data[0]);
//   // sort it for certain title
//   console.log("artist: " + response.data[0].artist.name);
//   console.log("artist: " + response.data[0].artist.thumb_url);
//   console.log("artist: " + response.data[0].artist.url);

//   /*important*/
//   // console.log("Array: " + response.data[i].offers[0].url);
//   // console.log("Ticket: " + response.data[i].offers[0].status, i)
//   // using for loop through the data
//   for (i = 1; i < response.data.length; i++) {
//     // console.log(response.data[i], i);
//     // const artist = response.data[i].lineup;
//     console.log(".....................................");
//     console.log("Artist Name: " + response.data[i].lineup, i);
//     console.log("Date&Time: " + response.data[i].datetime, i);
//     console.log("Staduim: " + response.data[i].venue.name, i);
//     console.log("city: " + response.data[i].venue.city, i);
//     console.log("country: " + response.data[i].venue.country, i);

//   }
// })