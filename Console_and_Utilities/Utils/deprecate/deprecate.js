const util = require('util');

module.exports.puts = util.deprecate(function() {
    for(var i=0, len = arguments.length; i < len; ++i) {
        process.stdout.write(arguments[i]+'\n');
    }
}, 'puts: use console.log instead');