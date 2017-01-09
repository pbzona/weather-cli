# Weather CLI

Simple weather command line tool powered by [Dark
Sky](https://darksky.net/poweredby/) and [Google Maps
API](https://developers.google.com/maps/). 

## Installation

1.  Make sure you're using NodeJS v6.9.x: `node -v`.
2.  Clone this repository to a location of your choosing: `git clone
3.  Run `npm install` to get the Node dependency packages.

### Dark Sky API Key

You'll need a Dark Sky API key to make calls to the weather service. To get
one, sign up [here](https://darksky.net/dev/). 

The API key will need to be added in `app-promise.js` or
`weather-dir/weather.js`, depending on how you want to run the app, as the 
**apiKey** variable. In a future release, this will be simplified.

Your first 1000 API calls each day are free. This is intended to be a personal
application, so the free calls should be more than sufficient.

## Usage

Two main scripts are included:

`app.js` uses chained callbacks and modules to grab the data.
`app-promise.js` uses promises to do exactly the same thing in a cleaner way.

To run the program:

   `node app.js` or `node app-promise.js`

Use the `-a` flag with an address string or ZIP code to specify the location
for which you'd like to receive weather data.

Default values returned are:

-   **Weather**: Description of current weather
-   **Temperature**: The current actual temperature
-   **Feels like**: Apparent temperature based on wind, humidity, etc.
-   **Forecast**: Predicted weather patterns for the next few hours

