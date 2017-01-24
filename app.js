const yargs = require('yargs');

const {getLocation, getWeather} = require('./scripts/weather');
const {format, handleFormatError} = require('./scripts/format');
const utils = require('./scripts/utils');
const {secrets} = require('./config/secrets');
const {yargsOptions} = require('./config/options');

const argv = yargs
    .options(yargsOptions)
    .help()
    .alias('help', 'h')
    .argv;

var target = utils.getAddress(utils.checkAddress(argv.address));

getWeather(getLocation(target.address), secrets.apiKey).then((response) => {
    format(response, argv);
}).catch((e) => {
    handleFormatError(e);
});

utils.overwriteAddress(target);
