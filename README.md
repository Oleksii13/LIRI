# **LIRI**
> ### **Like SIRI but LIRI** ###

As you can see from the top, I made a basic search-bot version of the SIRI. 
Here you can search 3 different topics:
1.Artist/Band search.
2.Song search.
3.Movie search.
4. It will search for default information, which you specified prior in the random.txt

### Let's begin with explanation how LIRI works. ###

Because I used Node.js for this project, you have to go to Terminal and type command `node liri.js`

![start](https://github.com/Oleksii13/LIRI/blob/master/print_screen/start.png)

After you press enter you will get 4 choices to make a search:

![choice](https://github.com/Oleksii13/LIRI/blob/master/print_screen/choice.png)

After choosing the first-line Search for the Event LIRI will ask you to specify which band or artist's event you want to visit:

![concert](https://github.com/Oleksii13/LIRI/blob/master/print_screen/concert.png)

I have already added `drake` to search for events that will be in nearest future.
And finally we will get the result:

![a result of the concert](https://github.com/Oleksii13/LIRI/blob/master/print_screen/result_concert.png)

In result, you will get info such as:
* Artist/Band name
* Name of the venue
* Venue location 
* Date of the Event

To start the programme again, you need to start it from the beginning with `node liri.js` code in the Terminal.

Let's try another choice. For example, Search for a song info from the Spotify API:

![choice](https://github.com/Oleksii13/LIRI/blob/master/print_screen/choice.png)

LIRI will ask you which song do you want to search. I have already put `The Sign` for example.

![song](https://github.com/Oleksii13/LIRI/blob/master/print_screen/song.png)

Press enter to get the result:

![a result of song](https://github.com/Oleksii13/LIRI/blob/master/print_screen/result_song.png)

You can see that LIRI provide:
* Artist's name
* The song's name
* A link, where you can listen for 30 seconds preview
* The Albom's name

Pretty nice, yeah !!!

Let's choose to search for a movie, third choice.
It will ask you the name of the movie:

![movie name](https://github.com/Oleksii13/LIRI/blob/master/print_screen/movie.png)

I will search legend of the movie `Matrix`

And what we got:

![movie result](https://github.com/Oleksii13/LIRI/blob/master/print_screen/result_movie.png)

Detailed info about the movie:
* Title
* Date released
* Rating
* Actors
* etc.

Wonderfull!!!

Let's try last but not least choice, choice of search that LIRI made by default.
You need just choose the fourth choice and LIRI will do everything for you.

![LIRI choice](https://github.com/Oleksii13/LIRI/blob/master/print_screen/result_liri.png)

By default LIRI will search song `I want it that way` from Spotify database
and will give you appropriate info:
* Artist's name
* The song's name
* A link, where you can listen for 30 seconds preview
* The Albom's name

Awesome !!!!

By the way, LIRI logs all inpust and results by default:

![log](https://github.com/Oleksii13/LIRI/blob/master/print_screen/log.png)

For this project I used npm packages:
1.[axios](https://www.npmjs.com/package/axios)
2.[dotenv](https://www.npmjs.com/package/dotenv)
3.[inquirer](https://www.npmjs.com/package/inquirer/v/6.0.0) 
4.[moment](https://www.npmjs.com/package/moment)
5.[node-spotify-api](https://www.npmjs.com/package/node-spotify-api)

You have to install them with the command `npm install` prior to use the programme.

Also, to ou Spotify's song search you have to get ID key and Secure Key from the official [Spotify](https://developer.spotify.com/dashboard/login) webpage.

:sparkles: Have happy experience with LIRI and all the best :sparkles:











