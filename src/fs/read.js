import { createPathVariables } from '../utils/createPathVariables.js';
import { readFile } from 'fs';
import path from 'path';
import { createFsError } from '../utils/fsError.js';

const { __dirname } = createPathVariables(import.meta.url);

const read = async () => {
    readFile(
        path.join(__dirname, 'files/fileToRead.txt'),
        'utf8',
        (err, data) => {
            if (err?.code === 'ENOENT') {
                throw createFsError();
            }
            console.log(data);
        })
};

await read();