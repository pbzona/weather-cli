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

Once you have it, set your API key in `config/secrets.js`.

Your first 1000 API calls each day are free. This is a personal
application, so the free calls should be more than enough.

## Usage

To run the program:

-   `node app.js -a <location>`

The `-a` flag specifies a location, which can be a street and city, full address,
or just a ZIP code. The location isn't mandatory; if you don't provide one,
the app will just use the last location you searched for.

The default values are:

-   **Location**: The full requested location in a nice format
-   **Weather**: Description of current weather
-   **Temperature**: The current actual temperature
-   **Feels like**: Apparent temperature based on wind, humidity, etc.

## Options

Use these options to get custom weather data:

-   `-t, --today` - Gives more information for the daily weather, including the high and low temperatures, humidity, and forecast.
-   `-r, --rain` - Will it rain today? Use this flag to find out.

![Powered by Dark
Sky](https://darksky.net/dev/img/attribution/poweredby-oneline.png)
