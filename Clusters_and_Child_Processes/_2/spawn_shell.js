const { spawn } = require('child_process');

// shell mode
const child = spawn('find . -type f', {
    stdio: 'inherit',
    shell: true
});