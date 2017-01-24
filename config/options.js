var yargsOptions = {
    a: {
        alias: 'address',
        describe: 'Address to search for',
        string: true
    },
    d: {
        alias: 'daily',
        describe: 'Weather for today',
        boolean: true
    },
    w: {
        alias: 'weekly',
        describe: 'Weather for the week',
        boolean: true
    },
    r: {
        alias: 'rain',
        describe: 'Will it rain today?',
        boolean: true
    },
}

module.exports = {yargsOptions}
