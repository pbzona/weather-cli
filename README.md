# Weather CLI

Simple weather command line tool powered by [Dark
Sky](https://darksky.net/poweredby/) and [Google Maps
API](https://developers.google.com/maps/).

![Screenshot](http://imgur.com/bivPx9U)

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

Options for more detailed weather data are shown in the next section. If you don't use any options, you'll only get the current weather:

-   **Weather**: Description of current weather
-   **Temperature**: The current actual temperature
-   **Feels like**: Apparent temperature based on wind, humidity, etc.

By default, temperatures have some basic styling properties. Anything over 80 degrees will be shown in red, and anything under 30 degrees will appear in blue. If you don't like this, add the `--no-color` flag to disable colors.

## Options

Use these options to get custom weather data:

-   `-d, --daily` - Gives more information for the daily weather, including the high and low temperatures, humidity, and forecast.
-   `-w, --weekly` - Gets highs, lows, and chance of rain for the upcoming week.
-   `-r, --rain` - Will it rain today? Use this flag to find out.

![Powered by Dark Sky](https://darksky.net/dev/img/attribution/poweredby-oneline.png)
