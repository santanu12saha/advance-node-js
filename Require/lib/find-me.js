console.log('In ./lib/find-me.js');

console.log(module);

// require('../index'); circular module dependency

exports.id = 'find-me';

// don't use exports object in timer

// setImmediate(() => {
//     console.log('In ./lib/find-me.js');
//     console.log(module);
//     exports.id = 'find-me';
// });