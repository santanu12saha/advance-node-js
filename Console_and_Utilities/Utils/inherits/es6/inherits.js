const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {
    constructor() {
        super();
    }

    write (data) {
        setInterval(() => {
            this.emit('data', data);
        }, 5000);
    }
}

module.exports = CustomEmitter;