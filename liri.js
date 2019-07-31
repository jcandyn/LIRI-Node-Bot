require("dotenv").config();
var keys = require("./keys.js");
console.log(keys)

// var spotify = new Spotify({
//   id: spotify.id,
//   secret: spotify.secret
//   });

var input = process.argv[2]
var input2 = process.argv[3]


if (input == "concert-this") {

}

else if (input == "spotify-this-song") {

}

else if (input == "movie-this") {

}

else if (input == "do-what-it-says") {

}


// SPOTIFY
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data);  
// });


spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

const axios = require('axios');

// OMDBI


 omdbiKey = keys.omdbi.id
 const movieName = input

 

axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=" + omdbiKey)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  
