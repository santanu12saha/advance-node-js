const { spawn } = require('child_process');

// shell mode with different cmd
const child = spawn('find . -type f | wc -l', {
    stdio: 'inherit',
    shell: true,
    cwd: '/home/santanu/Downloads'
});