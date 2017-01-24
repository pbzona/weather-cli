var basicWeather = (response) => {
    var currentWeather = response.data.currently.summary;
    var temperature = response.data.currently.temperature;
    var feelsLike = response.data.currently.apparentTemperature;

    console.log('=================');
    console.log('     Current     ');
    console.log('=================');
    console.log(`Weather: ${currentWeather}`);
    console.log(`Temperature: ${temperature}\xB0 F`);
    console.log(`Feels Like: ${feelsLike}\xB0 F`);
};

var verboseWeather = (response) => {
    var forecast = response.data.hourly.summary;
    var todayLow = response.data.daily.data[0].temperatureMin;
    var todayHigh = response.data.daily.data[0].temperatureMax;
    var humidity = response.data.daily.data[0].humidity;

    console.log('=================');
    console.log('      Today      ');
    console.log('=================');
    console.log(`Forecast: ${forecast}`);
    console.log(`Today's Low: ${todayLow}\xB0 F`);
    console.log(`Today's High: ${todayHigh}\xB0 F`);
    console.log(`Humidity: ${humidity * 100}%`);
};

var willItRain = (response) => {
    var rainProb = response.data.daily.data[0].precipProbability * 100;
    var answer;
    if (response.data.daily.data[0].precipType == 'rain') {
        if (rainProb == 0) {
            answer = 'No.';
        } else if (rainProb > 0 && rainProb <= 20) {
            answer = 'Very unlikely.';
        } else if (rainProb > 20 && rainProb <= 40) {
            answer = 'Probably not.';
        } else if (rainProb > 40 && rainProb <= 60) {
            answer = 'Maybe.';
        } else if (rainProb > 60 && rainProb <= 80) {
            answer = 'Probably.';
        } else if (rainProb > 80 && rainProb < 100) {
            answer = 'Very likely.';
        } else if (rainProb == 100) {
            answer = 'Yes.';
        }
    } else {
        answer = 'No.';
    }

    var qualifier;
    if (rainProb < 50) {
        qualifier = 'only ';
    } else {
        qualifier = '';
    }

    console.log('=================');
    console.log('  Will it rain?  ');
    console.log('=================');
    console.log(`${answer}`);
    console.log(`There's ${qualifier}a ${rainProb}% chance of rain.`);
};

module.exports = {basicWeather, verboseWeather, willItRain};
