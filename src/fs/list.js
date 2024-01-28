import { createPathVariables } from '../utils/createPathVariables.js';
import { readdir } from 'fs';
import path from 'path';
import { createFsError } from '../utils/fsError.js';

const { __dirname } = createPathVariables(import.meta.url);

export const list = async () => {
    readdir(
        path.resolve(__dirname, 'files'),
        (err, files) => {
            if (err?.code === 'ENOENT') {
                throw createFsError()
            }
            console.log(files);
        })
};

await list();