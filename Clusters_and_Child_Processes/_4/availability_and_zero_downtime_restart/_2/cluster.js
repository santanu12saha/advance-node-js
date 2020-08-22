const cluster = require('cluster');
const os = require('os');
const pid = process.pid;

if(cluster.isMaster) {
    const cpus = os.cpus().length;
    
    console.log(`Forking for ${cpus} CPUs`);
    for(let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    console.log(`Master PID: ${pid}`);

    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);

        const restartWorker = (workerIndex) => {
            const worker = workers[workerIndex];
            if(!worker) return;

            worker.on('exit', () => {
                if(!worker.exitedAfterDisconnect) return;
                console.log(`Exited process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorker(workerIndex + 1);
                });
            });

            worker.disconnect();
        };

        restartWorker(0);
    });
   
} else {
    require('./server');
}