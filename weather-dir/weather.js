const request = require('request');

var {apiKey} = require('./../secrets/apikey');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
            if (error) {
                callback('Unable to fetch weather');
            } else {
                callback(undefined, {
                    temperature: body.currently.temperature,
                    feelsLike: body.currently.apparentTemperature,
                    currentWeather: body.currently.summary,
                    forecast: body.hourly.summary
            })}
    });
};

module.exports.getWeather = getWeather;
