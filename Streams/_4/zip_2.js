const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    }
});

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(progress)
    .pipe(fs.createWriteStream(file +'1_.gz'))
    .on('finish', () => console.log('Done'));

