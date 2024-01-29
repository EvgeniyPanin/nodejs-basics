import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { join } from 'path';
import { createPathVariables } from '../utils/createPathVariables.js';

const { __dirname } = createPathVariables(import.meta.url);

const performCalculations = async () => {
    const workerFile = join(__dirname, 'worker.js');
    const workerThreads = cpus().map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerFile);
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error());
            });
            worker.postMessage(i + 10);
        })
    });
    const workersResult = await Promise.allSettled(workerThreads);
    const data = workersResult.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: value || null,
    }))
    console.log(data);
};

await performCalculations();