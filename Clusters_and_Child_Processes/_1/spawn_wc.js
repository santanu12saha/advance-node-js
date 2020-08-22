const { spawn } = require('child_process');

const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
    console.log(`\nChild stdout:\n${data}`);
});
