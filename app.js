const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather-dir/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to search for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        console.log('==================================');
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Weather: ${weatherResults.currentWeather}`);
                console.log(`Current temperature: ${weatherResults.temperature}\xB0 F`);
                console.log(`Feels like: ${weatherResults.feelsLike}\xB0 F`);
                console.log(`Forecast: ${weatherResults.forecast}`);
                console.log('============');
                console.log('Powered by Dark Sky: https://darksky.net/poweredby/');
            }
        });
    }
});


