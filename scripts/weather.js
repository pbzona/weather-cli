const axios = require('axios');

var getLocation = (address) => {
    var encodedAddress = encodeURIComponent(address);
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
}

var getWeather = (geocodeURL) => {
    return axios.get(geocodeURL).then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address');
        }

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherURL = `https://weather.phizon.io/${lat},${lng}`;

        console.log('=================');
        console.log(response.data.results[0].formatted_address.green);

        return axios.get(weatherURL);
    });
};

module.exports = {getLocation, getWeather};
