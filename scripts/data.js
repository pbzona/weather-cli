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

var dailyWeather = (response) => {
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

var weeklyWeather = (response) => {
    console.log('=================');
    console.log('    This week    ');
    console.log('=================');

    var today = new Date(response.data.daily.data[0].time * 1000).getDay();

    var weekday = new Array(7);
    weekday[0] = 'Sunday    ';
    weekday[1] = 'Monday    ';
    weekday[2] = 'Tuesday   ';
    weekday[3] = 'Wednesday ';
    weekday[4] = 'Thursday  ';
    weekday[5] = 'Friday    ';
    weekday[6] = 'Saturday  ';

    var getStats = (i) => {
        var dayLow = response.data.daily.data[i].temperatureMin.toFixed();
        var dayHigh = response.data.daily.data[i].temperatureMin.toFixed();
        var rainProb = response.data.daily.data[i].precipProbability * 100;

        return {dayLow, dayHigh, rainProb};
    };

    for (var i = today; i < 7; i++) {
        var stats = getStats(i);
        var day;
        if (i == today) {
            day = 'Today     ';
        } else if (i == today + 1) {
            day = 'Tomorrow  ';
        } else {
            day = weekday[i];
        }
        console.log(`${day} - Lo: ${stats.dayLow}\xB0F   Hi: ${stats.dayHigh}\xB0F   Rain: ${stats.rainProb}%`);
        if (i == 6 && today > 0) {
            for (var j = 0; j < today; j++) {
                stats = getStats(j);
                day = weekday[j];
                console.log(`${day} - Lo: ${stats.dayLow}\xB0F   Hi: ${stats.dayHigh}\xB0F   Rain: ${stats.rainProb}%`);
            }
        }
    }
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
    if (rainProb > 0) {
        console.log(`There's ${qualifier}a ${rainProb}% chance of rain.`);
    };
};

module.exports = {basicWeather, dailyWeather, weeklyWeather, willItRain};
