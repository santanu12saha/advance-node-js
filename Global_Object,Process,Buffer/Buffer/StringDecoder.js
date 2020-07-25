const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let chunk = input;
    if(chunk != null) {
        const buffer = Buffer.from([chunk]);
        console.log('With .toString():', buffer.toString());
        console.log('with StringDecoder:', decoder.write(buffer));
    }
});