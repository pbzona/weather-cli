const fs = require('fs');
const path = require('path');
const colors = require('colors');

// checks to see if an address was provided as an argument
var checkAddress = (arg) => {
    if (arg) {
        return arg;
    } else return;
};
// options for file I/O functions
var options = {
    encoding: 'utf-8'
};
// returns the saved address (last one used) if none is given
var getAddress = (addressArg) => {
    var address;
    var overwrite;
    if (!addressArg) {
        address = fs.readFileSync(path.join(__dirname, '../config/address.txt'), options)
        overwrite = false;
    } else {
        address = addressArg;
        overwrite = true;
    }
    return {
        address,
        overwrite
    }
};
// saves the address to the file for next time, if needed
var overwriteAddress = (addressObject) => {
    if (addressObject.overwrite) {
        fs.writeFileSync('./config/address.txt', addressObject.address, options);
    }
};

// checks a temperature and changes its color if it's extreme
var intensity = (temperature) => {
    if (temperature <= 30.00) {
        return temperature.toString().cyan;
    } else if (temperature >= 90.00) {
        return temperature.toString().red;
    } else {
        return temperature.toString();
    }
}

module.exports = {checkAddress, getAddress, overwriteAddress, intensity};
