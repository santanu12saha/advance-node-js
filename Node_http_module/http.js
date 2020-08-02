const server = require('http').createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello world\n');
});

server.listen(8000, () => {
    console.log('Server is running at port 8000')
});