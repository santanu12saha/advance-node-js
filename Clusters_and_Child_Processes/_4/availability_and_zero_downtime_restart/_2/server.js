const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for(let i=0; i < 1e7; i++); // simulate CPU works
    res.end(`Handle by process ${pid}`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});
