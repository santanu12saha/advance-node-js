const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const callBackA = () => {
    console.log('A');
    myEmitter.removeListener('event', callBackB);
}

const callBackB = () => {
    console.log('B');
}

myEmitter.on('event', callBackA);

myEmitter.on('event', callBackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A