const colors = require('colors');

const returnData = require('./data');

var format = (response, options) => {
    returnData.basicWeather(response);
    if (options.d || options.daily) {
        returnData.dailyWeather(response);
    }
    if (options.w || options.week) {
        returnData.weeklyWeather(response);
    }
    if (options.r || options.rain) {
        returnData.willItRain(response);
    }
    console.log('=================');
    console.log('Powered by Dark Sky'.magenta);
};

var handleFormatError = (e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
}

module.exports = {format, handleFormatError};
