require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var inquirer = require("inquirer");

// #1 function search event
var bandsintown = function(newData) {
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    newData +
    "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(function(response) {
    console.log("\nArtist/Band: " + response.data[0].lineup);
    console.log("Name of The venue: " + response.data[0].venue.name);
    console.log(
      "Venue location: " +
        response.data[0].venue.city +
        " " +
        response.data[0].venue.region +
        " " +
        response.data[0].venue.country
    );
    console.log(
      "Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY")
    );
    fs.appendFile(
      "./log.txt",
      "\n\n" +
        moment().format("LTS") +
        "\nArtist/Band: " +
        response.data[0].lineup +
        "\nName of The venue: " +
        response.data[0].venue.name +
        "\nVenue location: " +
        response.data[0].venue.city +
        " " +
        response.data[0].venue.region +
        " " +
        response.data[0].venue.country +
        "\nDate: " +
        moment(response.data[0].datetime).format("MM/DD/YYYY"),
      function(err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  });
};

// #2 function search song
var spotifySearch = function(newData) {
  spotify
    .request('https://api.spotify.com/v1/search?q="' + newData + '"&type=track')
    .then(function(data) {
      console.log("\nArtist's name: " + data.tracks.items[0].artists[0].name);
      console.log("The song's name: " + data.tracks.items[0].name);
      console.log("A preview link: " + data.tracks.items[0].preview_url);
      console.log("The Album is: " + data.tracks.items[0].album.name);

      fs.appendFile(
        "./log.txt",
        "\n\n" +
          moment().format("LTS") +
          "\nArtist's name: " +
          data.tracks.items[0].artists[0].name +
          "\nThe song's name: " +
          data.tracks.items[0].name +
          "\nA preview link: " +
          data.tracks.items[0].preview_url +
          "\nThe Album is: " +
          data.tracks.items[0].album.name,
        function(err) {
          if (err) {
            return console.log(err);
          }
        }
      );
    })
    .catch(function(err) {
      console.error("Error occurred: " + err);
    });
};

// #3 search movie
var movieSearch = function(newData) {
  var queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + newData;

  axios.get(queryUrl).then(function(response) {
    console.log("\nTitle: " + response.data.Title);
    console.log("Date released: " + response.data.Released);
    console.log("Rating IMDB: " + response.data.imdbRating);
    console.log(
      "Rating " +
        response.data.Ratings[0].Source +
        ": " +
        response.data.Ratings[0].Value
    );
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);

    fs.appendFile(
      "./log.txt",
      "\n\n" +
        moment().format("LTS") +
        "\nTitle: " +
        response.data.Title +
        "\nDate released: " +
        response.data.Released +
        "\nRating IMDB: " +
        response.data.imdbRating +
        "\nRating " +
        response.data.Ratings[0].Source +
        ": " +
        response.data.Ratings[0].Value +
        "\nCountry: " +
        response.data.Country +
        "\nLanguage: " +
        response.data.Language +
        "\nPlot: " +
        response.data.Plot +
        "\nActors: " +
        response.data.Actors,
      function(err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  });
};

// 4 read file and then do what that file says
var doIt = function() {
  fs.readFile("./random.txt", "utf8", function(err, data) {
    if (err) throw err;
    var newData = data.split(",");

    if (newData[0] === "spotify-this-song") {
      spotifySearch(newData[1]);
    } else if (newData[0] === "movie-this") {
      movieSearch(newData[1]);
    } else if (newData[0] === "concert-this") {
      bandsintown(newData[1]);
    } else {
      console.log("error");
    }
  });
};

inquirer
  .prompt([
    {
      type: "list",
      name: "doingWhat",
      message: "What do you want?",
      choices: [
        "Search for the Concert.",
        "Search a Song.",
        "Movie Search.",
        "LIRI know want you want!!!"
      ]
    }
  ])
  .then(answers => {
    fs.appendFile("./log.txt", "\n" + answers.doingWhat + "\n", function(err) {
      if (err) {
        return console.log(err);
      }
    });
    if (answers.doingWhat === "Search for the Concert.") {
      inquirer
        .prompt([
          {
            type: "name",
            name: "what",
            message: "What concert do you like to visit?"
          }
        ])
        .then(function(lastAnswer) {
          fs.appendFile("./log.txt", lastAnswer.what + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
          });
          bandsintown(lastAnswer.what);
        });
    } else if (answers.doingWhat === "Search a Song.") {
      inquirer
        .prompt([
          {
            type: "name",
            name: "what",
            message: "About what song do you like to know?"
          }
        ])
        .then(function(lastAnswer) {
          fs.appendFile("./log.txt", lastAnswer.what + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
          });
          spotifySearch(lastAnswer.what);
        });
    } else if (answers.doingWhat === "Movie Search.") {
      inquirer
        .prompt([
          {
            type: "name",
            name: "what",
            message: "Which movie?"
          }
        ])
        .then(function(lastAnswer) {
          fs.appendFile("./log.txt", lastAnswer.what + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
          });
          movieSearch(lastAnswer.what);
        });
    } else if (answers.doingWhat === "LIRI know want you want!!!") {
      doIt();
    }
  });
