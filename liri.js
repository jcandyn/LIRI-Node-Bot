require("dotenv").config();
var keys = require("./keys.js");


var input = process.argv[2]
// var input2 = process.argv[3]
var input2 = process.argv.slice(3).join(" ");
console.log(input2)


if (input == "concert-this") {
  movieOrBands(input2)
}

else if (input == "spotify-this-song") {
spotify(input2)
}

else if (input == "movie-this") {

  if (input2) {
movieOrBands(input2)
  }
  else if (!input2) {
    movieOrBands("Mr. Nobody")
  }
}

else if (input == "do-what-it-says") {
  random()

}

function random() {
  
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

function movieOrBands(input2) {
const axios = require('axios');

// OMDBI
if (input === "movie-this") {
  movie()
}

else if (input === "concert-this") {
  concert()
}
function movie() {

 omdbiKey = keys.omdbi.id

axios.get("http://www.omdbapi.com/?t=" + input2 + "&apikey=" + omdbiKey)
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

function concert() {
  console.log("band call working")
  axios.get("https://rest.bandsintown.com/artists/" + input2 + "/events?app_id=codingbootcamp")
  .then(function (response) {
    // handle success
    console.log(response.data)
    if (response.data.length == 0) {
        console.log("Sorry, there seems to be no events for that artist. Try a new search!")
    }
    else if (response.data.length > 0) {
    for (i=0; i<response.data.length; i++) {
//  console.log(response.data)
    // console.log("Whole response " + response);
    // console.log("Offers array" + response.data.offers[i]);
    console.log("---------------------------------------------------------------")
    console.log("--------------------------CONCERTS-----------------------------")
    console.log("---------------------------------------------------------------")
    console.log("Lineup: " + response.data[i].lineup);
    console.log("---------------------------------------------------------------")
    console.log("Date: " + response.data[i].datetime);
    console.log("---------------------------------------------------------------")
    console.log("Venue: " + response.data[i].venue.name);
    console.log("---------------------------------------------------------------")
    console.log("Country: " + response.data[i].venue.country);
    console.log("---------------------------------------------------------------")
    console.log("City: " + response.data[i].venue.city);
    }
  }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
}
