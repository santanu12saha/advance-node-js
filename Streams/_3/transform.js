const { Transform } = require('stream');

const uppercaseTr = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(uppercaseTr).pipe(process.stdout);