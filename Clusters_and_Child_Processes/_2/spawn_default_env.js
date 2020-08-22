const { spawn } = require('child_process');

// env
const child = spawn('echo $HOME', {
    stdio: 'inherit',
    shell: true,
});