const os = require('os');

console.log(os.cpus());
console.log(os.networkInterfaces().wlp3s0.map(i => i.address));
console.log(os.freemem());
console.log(os.type());
console.log(os.release());
console.log(os.userInfo());
console.log(os.constants);
console.log(os.constants.signals);