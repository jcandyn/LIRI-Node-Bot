require("dotenv").config();
var keys = require("./keys.js");
console.log(keys)

var input = process.argv[2]
var input2 = process.argv[3]


if (input == "concert-this") {

}

else if (input == "spotify-this-song") {
spotify(input2)
}

else if (input == "movie-this") {
movie(input2)
}

else if (input == "do-what-it-says") {

}

function spotify(song) {
// SPOTIFY
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

spotify.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

// track name
console.log("----------------------------SONG-------------------------------")
console.log("---------------------------------------------------------------")
    console.log("Track's Name: " + data.tracks.items[0].name); 
    console.log("---------------------------------------------------------------")
    // artist name
    console.log("Artist's Name: " + data.tracks.items[0].artists[0].name); 
    console.log("---------------------------------------------------------------")
    // album name
    console.log("Album's Name: " + data.tracks.items[0].album.name)
    console.log("---------------------------------------------------------------")
    // url to preview track
    console.log("Check it out!: " + data.tracks.items[0].external_urls.spotify)
    console.log("---------------------------------------------------------------")
});
}

function movie(movie) {
const axios = require('axios');

// OMDBI

 omdbiKey = keys.omdbi.id

axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=" + omdbiKey)
  .then(function (response) {
    // handle success
    // console.log(response);
    console.log("---------------------------------------------------------------")
    console.log("--------------------------MOVIE--------------------------------")
    console.log("---------------------------------------------------------------")
    console.log("Name of the Movie: " + response.data.Title)
    console.log("---------------------------------------------------------------")
    console.log("Released Date: " + response.data.Released)
    console.log("---------------------------------------------------------------")
    console.log("IMDB Rating: " + response.data.Ratings.imdbRating)
    console.log("---------------------------------------------------------------")
    // console.log("Rotten Tomatoes Rating: " + response.data.Ratings.imdbRating)
    console.log("Where it was produced: " + response.data.Country)
    console.log("---------------------------------------------------------------")
    console.log("Language: " + response.data.Language)
    console.log("---------------------------------------------------------------")
    console.log("Plot: " + response.data.Plot)
    console.log("---------------------------------------------------------------")
    console.log("Actors: " + response.data.Actors)
    console.log("---------------------------------------------------------------")

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

}
