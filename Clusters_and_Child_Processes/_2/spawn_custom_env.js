const { spawn } = require('child_process');

// custom env
const child = spawn('echo $ANSWER', {
    stdio: 'inherit',
    shell: true,
    env: { 'ANSWER': 45 }
});