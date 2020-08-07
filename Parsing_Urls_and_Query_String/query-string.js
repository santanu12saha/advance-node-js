const queryString = require('querystring');

var obj = {
    name: 'Santanu Saha',
    website: 'jsComplete.com/santanu-saha'
};

console.log(queryString.stringify(obj));

console.log(queryString.parse('name=Santanu%20Saha&website=jsComplete.com%2Fsantanu-saha'));