const CustomEmitter  = require('./inherits');

const customEmitter = new CustomEmitter();

customEmitter.write('Hi');

customEmitter.on('data', (data) => {
    console.log(data);
});