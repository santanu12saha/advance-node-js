const fs = require('fs');

const readFileAsArray = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) return reject(err);
    
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    });
};

readFileAsArray('./number.txt')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('promise --> odd numbers count :', oddNumbers.length);
    }).catch(err => {
        console.log(err);
    });

