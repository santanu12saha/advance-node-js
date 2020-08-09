const CustomEmitter  = require('./inherits');

const customEmitterInstance = new CustomEmitter();

customEmitterInstance.write('Hi');

customEmitterInstance.on('data', (data) => {
    console.log(data);
});
