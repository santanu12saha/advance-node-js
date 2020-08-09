const fs = require('fs');
const server = require('https').createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
});

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello world \n');
});

server.listen(443, () => {
    console.log('Server is running at port 443');
});
const fs = require('fs');
const server = require('https').createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
});

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello world \n');
});

server.listen(443, () => {
    console.log('Server is running at port 443');
});