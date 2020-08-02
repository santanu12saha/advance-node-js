const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id] = socket;
    console.log('Client connected!\n');
    socket.on('data', data => {
        Object.keys(sockets).map(Number).forEach((k) => {
            if(k !== socket.id) {
                let cs = sockets[k];
                cs.write(`${socket.id}:`);
                cs.write(data);
            }
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected!\n');
    });
});

server.listen(8000, () => console.log('server bound'));