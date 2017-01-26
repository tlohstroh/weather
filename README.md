# React weather app

This app lets you search for different cities, and provides you with a set of graphs for temperature, pressure and humidity for the upcoming 5 days. Every search will result in an additional item on the list of graphs, so the weather in different cities are easily compared.

![screenshot](http://res.cloudinary.com/ddpouudhk/image/upload/v1485377404/screencapture-localhost-8080-1485376903455_dshhkk.png)

###Udemy Modern React with Redux part 5###

boilerplate: https://github.com/StephenGrider/ReduxSimpleStarter

We introduced an action creator in the form of fetchWeather.
We had  constant for our action type that allows us to specify the action type in our action and in our reducer swell. And it just cuts down on the ability for us to make typo’s compared to using a pure string.

Next interesting thing was the use of middleware. Middleware, specifically redux-promise. We use redux-pormide to handle a promise that we received while using AXIOS to make our AJAX request. 
This middleware is especially helpful because it automatically detects that we provide it a payload of a proromis. It stops that action an then waited for the promise to resolve. Once the promise resolves it takes the data coming back from the request stuck it o the payload property and sent the action on to all of the reducers of our application. 
So although we wrote AJAX request here that inherently involves asynchronous code, we didn’t really have to think about the asynchronous nature of our code at all; we just wrote some code where an action is created, it flows to the reducers and we don’t have to worry about any promises or callbacks. So a very handy library to have around!


Next we covered reducers, specifically how we always have to strive to avoid mutating our state. Remember, we never want to do something like state.weather.push; we never want to modify our state directly. Instead, we return a new object that will take the place of out existing state.

For an array we also covered the use case of destructuring  an existing array So that’s what was happening here; we were taking an existing array, flattening it out to create a new one.

Finally we covered two very useful libraries that really bring your application to the next level: the spar lines library is fantastically easy to use. The hardest part was figuring out how we would get our weather data in there. But once you figured that out making our sparkling-chart was very straight forward. Sparklines are generally designed to be smaller charts, no full screen or anything like that. They’re really intended give the reader a lot of information at just a glance. It doesn’t really have the ability to add axes or anything like that, but we addressed that by adding th  the average function and also passing in the units as an additional property


Then we also made use of the react Google Maps component which makes placing a Googol map in you application super easy. All we had to do is provide the container element the google map element along with a defaultcenter  longitude and lattitude.

Finally we made sure to abstract both these components out ( chart.js and google_maps.js) to their own separate components, which means that if we had other areas in our application that needed a chart of a map we can reuse then in a snap.


# ReduxSimpleStarter


###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:StephenGrider/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```
