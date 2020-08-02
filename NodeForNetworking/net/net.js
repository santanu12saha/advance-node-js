const server = require('net').createServer();

server.on('connection', socket => {
    console.log('client connected');
    socket.write('Welcome new client!\n'); // duplex transmission

    socket.on('data', data => {
        console.log('data is: ', data); // in buffer object
        socket.write('data is: ');
        socket.write(data); // to client default utf8 conversion string
    });

    socket.on('end', () => {
        console.log('client is disconnected');
    });
});

server.listen(8000, () => console.log('server bound'));