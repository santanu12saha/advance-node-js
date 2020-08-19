const fs = require('fs');

const file = fs.createWriteStream('./big.file');

for(let i = 0; i <= 100; i++) {
    file.write('Santanu Saha Santanu saha Santanu Saha Santanu saha Santanu Saha Santanu saha Santanu Saha Santanu saha');
}

file.end();