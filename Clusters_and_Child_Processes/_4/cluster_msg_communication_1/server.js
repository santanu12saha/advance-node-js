const http = require('http');
const server = http.createServer();
const pid = process.pid;

let usersCount;

server.on('request', (req, res) => {
    for(let i=0; i < 1e7; i++); // simulate CPU works
    res.write(`Handle by process ${pid}\n`);
    res.end(`Users: ${usersCount}`);
});

server.listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', msg => {
    usersCount = msg.usersCount;
});

