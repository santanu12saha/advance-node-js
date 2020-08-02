const dns = require('dns');
const { hostname } = require('os');

dns.lookup('pluralsight.com', (err, address) => {
    console.log(address);
});

dns.resolve4('pluralsight.com', (err, address) => {
    console.log(address);
});

dns.resolve('pluralsight.com', 'A', (err, address) => {
    console.log(address);
});

dns.resolve('pluralsight.com', 'MX', (err, address) => {
    console.log(address);
})

dns.resolveMx('pluralsight.com', (err, address) => {
    console.log(address);
});

dns.reverse('35.165.209.195', (err, hostname) => {
    console.log(hostname);
});