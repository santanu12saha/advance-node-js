const fs = require('fs');

const readFileAsArray = (filePath, callback = () => {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
                return callback(err);
            }  
    
            const lines = data.toString().trim().split('\n');
            resolve(lines);
            callback(null, lines);
        });
    });
};

readFileAsArray('./number.txt')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('Promise --> odd numbers count :', oddNumbers.length);
    }).catch(err => {
        console.log(err);
    });

readFileAsArray('./number.txt', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('Callback --> odd numbers count :', oddNumbers.length);
});    

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