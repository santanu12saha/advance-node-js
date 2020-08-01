const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) return this.emit('error', err);
            this.emit('data', data);
            console.timeEnd('execute');
        });
    }
}

const withTime = new WithTime();

withTime.on('data', (data) => {
    console.log(`Length: ${data.length}`);
});

process.on('uncaughtException', (err) => {
    console.log(err);
    //do some cleanup
    process.exit(1); // exit anyway
});

// if we have mutiple error emits in the application, and we want to handle on first time
process.once('uncaughtException', (err) => {
    console.log(err);
    //do some cleanup
    process.exit(1); // exit anyway
}); 

withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, __filename);