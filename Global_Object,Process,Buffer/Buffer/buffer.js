console.log(Buffer);
console.log('--------------------------');
var b = Buffer.alloc(8); // it will create a fill buffer of certain size
console.log(b);
var bu = Buffer.allocUnsafe(8);  // it will not fill the created buffer
console.log(bu);
bu.fill() // it will fill the non filled buffer
console.log(bu);

// var bString = Buffer.allocUnsafe(800).toString();
// console.log(bString);

const string = 'touché'; //spanish word (touch english)
const buffer = Buffer.from('touché'); //spanish word (touch english)

console.log(string, string.length);
console.log(buffer, buffer.length);