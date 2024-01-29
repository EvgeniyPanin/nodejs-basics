import { isMainThread, parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (isMainThread) {
        console.error('You should run worker.js as a thread worker, not main thread');
        return;
    }
    parentPort.once('message', (n) => {
        parentPort.postMessage(nthFibonacci(n));
    });
};

sendResult();