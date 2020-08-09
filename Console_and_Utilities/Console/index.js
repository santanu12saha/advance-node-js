const fs = require('fs');
const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out, err);

setInterval(function() {
    console2.log(new Date().toUTCString());
    console2.error(new Error(`${new Date().toUTCString()} - oops something went wrong`));
}, 5000);