const returnData = require('./data');

var format = (response, options) => {
    returnData.basicWeather(response);
    if (options.v || options.today) {
        returnData.verboseWeather(response);
    }
    if (options.r || options.rain) {
        returnData.willItRain(response);
    }
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
