const fs = require('fs');

const readFileAsArray = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return reject(err);
            }  
    
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    });
};

const countOdd = async () => {
    try {
        const lines = await readFileAsArray('./number.txt');
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('async-await --> odd numbers count: ', oddNumbers.length);
    } catch (err) {
        console.log(err);
    }
};

countOdd();