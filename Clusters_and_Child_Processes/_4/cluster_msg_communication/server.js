const http = require('http');
const server = http.createServer();
const pid = process.pid;

server.on('request', (req, res) => {
    for(let i=0; i < 1e7; i++); // simulate CPU works
    res.end(`Handle by process ${pid}`);
});

server.listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', msg => {
    console.log(`Message from master: ${msg}`);
});