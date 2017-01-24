var format = (response) => {
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
};

var handleFormatError = (e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
}

module.exports = {format, handleFormatError};
