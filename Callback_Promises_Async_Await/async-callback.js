const fs = require('fs');

const readFileAsArray = (filePath, callback) => {
    fs.readFile(filePath, (err, data) => {
        if (err) return callback(err);

        const lines = data.toString().trim().split('\n');
        callback(null, lines);
    });
};

readFileAsArray('./number.txt', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('callback --> odd numbers count :', oddNumbers.length);
});