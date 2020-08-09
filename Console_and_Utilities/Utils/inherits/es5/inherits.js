const inherits = require('util').inherits;
const EventEmitter = require('events');

function CustomEmitter() {
    EventEmitter.call(this);
};

inherits(CustomEmitter, EventEmitter);

CustomEmitter.prototype.write = function(data) {
    _this = this;

    setInterval(function() {
        _this.emit('data', data);
    }, 5000);
};

module.exports = CustomEmitter;
