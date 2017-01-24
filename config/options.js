var yargsOptions = {
    a: {
        alias: 'address',
        describe: 'Address to search for',
        string: true
    },
    t: {
        alias: 'today',
        describe: 'Weather for today',
        boolean: true
    },
    r: {
        alias: 'rain',
        describe: 'Will it rain today?',
        boolean: true
    },
}

module.exports = {yargsOptions}
