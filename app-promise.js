const yargs = require('yargs');
const axios = require('axios');

var {apiKey} = require('./secrets/apikey');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    console.log('=================');

    return axios.get(weatherURL);
}).then((response) => {
    var currentWeather = response.data.currently.summary;
    var temperature = response.data.currently.temperature;
    var feelsLike = response.data.currently.apparentTemperature;
    var forecast = response.data.hourly.summary;

    console.log(`Weather: ${currentWeather}`);
    console.log(`Temperature: ${temperature}\xB0 F`);
    console.log(`Feels Like: ${feelsLike}\xB0 F`);
    console.log(`Forecast: ${forecast}`);
    console.log('=================');
    console.log('Powered by Dark Sky: https://darksky.net/poweredby/');
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else { 
        console.log(e.message);
    }    
});
