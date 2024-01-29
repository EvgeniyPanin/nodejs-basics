import { fork } from 'child_process';
import { join } from 'path';
import { createPathVariables } from '../utils/createPathVariables.js';

const { __dirname } = createPathVariables(import.meta.url);

const spawnChildProcess = async (args) => {
    fork(join(__dirname, 'files/script.js'), args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['some var', 'another var']);
