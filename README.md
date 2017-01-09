# Weather CLI

Simple weather command line tool powered by [Dark
Sky](https://darksky.net/poweredby/) and [Google Maps
API](https://developers.google.com/maps/). 

## Installation

1.  Make sure you're using NodeJS v6.9.x: `node -v`.
2.  Clone this repository to a location of your choosing: `git clone
    https://github.com/pbzona/weather-cli.git`.
3.  Run `npm install` to get the Node dependency packages.

### Dark Sky API Key

You'll need a Dark Sky API key to make calls to the weather service. To get
one, sign up [here](https://darksky.net/dev/). 

Once you have it, set your API key in `secrets/apikey.js`.

Your first 1000 API calls each day are free. This is intended to be a personal
application, so the free calls should be more than enough.

## Usage

To run the program:

-   `node app.js`

Use the `-a` flag with an address string or ZIP code to specify the location
for which you'd like to receive weather data. If you don't specify a location,
you'll get weather for the last location you searched for.

Values returned are:

-   **Location**: The full requested location in a nice format
-   **Weather**: Description of current weather
-   **Temperature**: The current actual temperature
-   **Feels like**: Apparent temperature based on wind, humidity, etc.
-   **Forecast**: Predicted weather patterns for the next few hours

