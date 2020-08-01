const fs = require('fs');
const EventEmitter = require('events');

class LineEmitter extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        asyncFunc(...args, (err, data) => {
            if (err) return this.emit('error', err);

            const lines = data.toString().trim().split('\n');
            this.emit('lines', lines);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const lineEmitter = new LineEmitter();

lineEmitter.on('begin', () => console.log('About to execute'));
lineEmitter.on('end', () => console.log('Done with execute'));

lineEmitter.execute(fs.readFile, './number.txt');

lineEmitter.on('error', (err) => console.log(err));
lineEmitter.on('lines', (lines) => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('Event Emitter --> odd numbers count :', oddNumbers.length);
});

