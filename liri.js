require("dotenv").config();
var keys = require("./keys.js");
console.log(keys)

// var spotify = new Spotify({
//   id: spotify.id,
//   secret: spotify.secret
//   });

var input = process.argv[2]


if (input == "concert-this") {

}

else if (input == "spotify-this-song") {

}

else if (input == "movie-this") {

}

else if (input == "do-what-it-says") {

}



var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
console.log(spotify)
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

