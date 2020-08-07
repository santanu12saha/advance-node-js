const url = require('url');
const myUrl = url.parse('https://www.pluralsight.com/search?q=santanu');
console.log(myUrl);

const myUrl_1 = url.parse('https://www.pluralsight.com/search?q=santanu', true);
console.log(myUrl_1);

const query = url.parse('https://www.pluralsight.com/search?q=santanu', true).query.q;
console.log(query);