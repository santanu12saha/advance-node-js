
const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

//server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP server listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
});

server.bind(PORT, HOST);

//client

const client = dgram.createSocket('udp4');
const msg = Buffer.from('Pluralsight rocks');

// client.send('Pluralsight rocks', PORT, HOST, (err) => {
//     if (err) throw err;

//     console.log('UDP message sent');
//     client.close();
// });

// Buffer implementation
client.send(msg, 0, 11, PORT, HOST, (err) => {
    if (err) throw err;
    
    console.log('UDP message sent');
    client.send(msg, 11, 6, PORT, HOST, (err) => {
        if (err) throw err;
        
        console.log('UDP message sent');
        client.close();
    });
});