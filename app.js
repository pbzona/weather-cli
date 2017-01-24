const yargs = require('yargs');

const {getLocation, getWeather} = require('./scripts/weather');
const {format, handleFormatError} = require('./scripts/format');
const utils = require('./scripts/utils');
const {secrets} = require('./config/secrets');

const argv = yargs
    .options({
        a: {
            alias: 'address',
            describe: 'Address to search for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var target = utils.getAddress(utils.checkAddress(argv.address));

getWeather(getLocation(target.address), secrets.apiKey).then((response) => {
    format(response);
}).catch((e) => {
    handleFormatError(e);
});

utils.overwriteAddress(target);
