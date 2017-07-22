# Weather CLI

Simple weather command line tool powered by [Dark
Sky](https://darksky.net/poweredby/) via `weather.philzona.net` and [Google Maps
API](https://developers.google.com/maps/).

![Screenshot](http://imgur.com/a/S6m4G)

## Installation

1.  Make sure you're using NodeJS v6 or greater: `node -v`.
2.  Clone this repository to a location of your choosing: `git clone
    https://github.com/pbzona/weather-cli.git`.
3.  Run `npm install` to get the Node dependencies.

## Usage

To run the program:

-   `node app.js -a <location>`

The `-a` flag specifies a location, which can be a street and city, full address, or just a ZIP code. The location isn't mandatory; if you don't provide one, the app will just use the last location you searched for (saved in `config/address.txt`).

Options for more detailed weather data are shown in the next section. If you don't use any options, you'll only get the current weather:

-   **Weather**: Description of current weather
-   **Temperature**: The current actual temperature
-   **Feels like**: Apparent temperature based on wind, humidity, etc.

By default, temperatures have some basic styling properties. Anything over 90 degrees will be shown in red, and anything under 30 degrees will appear in blue. If you don't like this, add the `--no-color` flag to disable colors.

## Options

Use these options to get custom weather data:

-   `-d, --daily` - Gives more information for the daily weather, including the high and low temperatures, humidity, and forecast.
-   `-w, --weekly` - Gets highs, lows, and chance of rain for the upcoming week.
-   `-r, --rain` - Will it rain today? Use this flag to find out.

## New Server Info

To comply with the Dark Sky ToS, calls are now being routed through [my server](https://weather.philzona.net) in order to append the API key securely without forcing the user to create and implement their own. This obviously isn't ideal, but until I can add some authentication, don't abuse the route I'm hosting. After the first 1000 calls per day it'll just turn off, and I'm hoping that will be enough for the personal use this is intended for.

![Powered by Dark Sky](https://darksky.net/dev/img/attribution/poweredby-oneline.png)
