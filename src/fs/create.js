import { createPathVariables } from '../utils/createPathVariables.js';
import { writeFile } from 'fs';
import path from 'path';
import { createFsError } from '../utils/fsError.js';

const { __dirname } = createPathVariables(import.meta.url);

const create = async () => {
    writeFile(
        path.resolve(__dirname, 'files/fresh.txt'),
        'I am fresh and young',
        { flag: 'wx' },
        (err) => {
            if (err !== null) {
                throw createFsError();
            }
        }
    )
};

await create();