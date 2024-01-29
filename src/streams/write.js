import { join } from 'path';
import { createWriteStream } from 'fs';
import { createPathVariables } from '../utils/createPathVariables.js';

const { __dirname } = createPathVariables(import.meta.url);

const write = async () => {
    const writable = createWriteStream(join(__dirname, 'files/fileToWrite.txt'))
    process.stdin.on('data', data => {
        writable.write(data.toString());
    });
};

await write();