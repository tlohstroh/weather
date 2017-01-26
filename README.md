# React weather app

This app lets you search for different cities, and provides you with a set of graphs for temperature, pressure and humidity for the upcoming 5 days. Every search will result in an additional item on the list of graphs, so the weather in different cities are easily compared.

![screenshot](http://res.cloudinary.com/ddpouudhk/image/upload/v1485377404/screencapture-localhost-8080-1485376903455_dshhkk.png)

##Udemy Modern React with Redux part 5##

boilerplate: https://github.com/StephenGrider/ReduxSimpleStarter

###Action creator###

We introduced an action creator in the form of fetchWeather. We have a constant for our action type that allows us to specify the action type in our action and in our reducer swell. It cuts down on the ability for us to make typo’s compared to using a pure string.

###Middleware: redux-promise###

Next interesting thing was the use of middleware, specifically redux-promise. We use redux-pormise to handle a promises that we receive, while using AXIOS to make our AJAX request. 
This middleware is especially helpful because it automatically detects that we provide it a payload of a promise. It stops that action an then waits for the promise to resolve. Once the promise resolves it takes the data coming back from the request, sticks it on the payload property and sents the action on to all of the reducers of our application. 
So although we wrote an AJAX request here that inherently involves asynchronous code, we don’t really have to think about the asynchronous nature of our code at all; we just write some code where an action is created, it flows to the reducers and we don’t have to worry about any promises or callbacks. So a very handy library to have around!

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1485425488/Schermafbeelding_2017-01-26_om_10.17.55_jwuwgi.png)

###Reducers###

Next we covered reducers, specifically how we always have to strive to avoid mutating our state! Remember, we never want to do something like state.weather.push!! We never want to modify our state directly. Instead, we return a new object that will take the place of our existing state.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1485425485/Schermafbeelding_2017-01-26_om_10.34.14_cszkte.png)

For an array we also covered the use case of destructuring an existing array. So that’s what was happening here at:

```
	[ action.payload.data, ...state]
```


We were taking an existing array, flattening it out to create a new one.

###Libraries: Sparklines & Google Maps###

Finally we covered two very useful libraries that really bring your application to the next level: the sparklines library and Google Maps. Sparklines is fantastically easy to use. The hardest part was figuring out how to get our weather data in there. But once figured out, making our sparkling-chart was very straight forward. Sparklines are generally designed to be smaller charts. They’re really intended give the reader a lot of information at just a glance. It doesn’t have the ability to add axes or anything like that, but we addressed that by adding the the average function and also passing in the units as an additional property

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1485425489/Schermafbeelding_2017-01-26_om_10.40.41_binjxx.png)

Then we also made use of the react Google Maps component which makes placing a Google map in you application super easy. All we had to do is provide the container element the google map element along with a defaultCenter longitude and lattitude.

![code-snippet](http://res.cloudinary.com/ddpouudhk/image/upload/v1485425485/Schermafbeelding_2017-01-26_om_10.49.27_wyblhh.png)

Finally we made sure to abstract both these components out ( chart.js and google_maps.js) to their own separate components, which means that if we had other areas in our application that needed a chart of a map we can reuse them in a snap.




###To start this app###

```
	> git clone git@github.com:tlohstroh/weather.git
	> cd weather
	> npm install
	> npm start
```
Sign up at http://openweathermap.org to obtain your own api key and create config.js in the root directory of the app with the folowing content:

```
	> export const API_KEY = "your key"
```
