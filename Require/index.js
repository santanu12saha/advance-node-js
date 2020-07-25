console.log('In ./index.js');

//require('find-me'); // it will load the file once require

//require.resolve('find-me'); // it will not load the file

//require.resolve('find-me1'); // it will still throw error if file doesn't exist

//require('find-me');
console.log(module);

const findMeExports = require('./lib/find-me');
console.log('findMeExporta: ', findMeExports);

const m1 = require('./lib/m1');
console.log(m1); // m1 module loaded: true