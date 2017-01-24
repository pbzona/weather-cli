const fs = require('fs');

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
        address = fs.readFileSync('./config/address.txt', options)
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

module.exports = {checkAddress, getAddress, overwriteAddress};
