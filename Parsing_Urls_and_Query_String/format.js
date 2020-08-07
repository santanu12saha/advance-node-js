const url = require('url');
var obj = {
    protocol: 'https',
    host: 'www.pluralsight.com',
    search: '?q=santanu',
    pathname: '/search'
};

const format = url.format(obj);
console.log(format);

