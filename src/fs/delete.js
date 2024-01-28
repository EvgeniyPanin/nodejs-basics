import { createPathVariables } from '../utils/createPathVariables.js';
import { rm } from 'fs';
import path from 'path';
import { createFsError } from '../utils/fsError.js';

const { __dirname } = createPathVariables(import.meta.url);

const remove = async () => {
    rm(
        path.join(__dirname, 'files/fileToRemove.txt'),
        (err) => {
            if (err !== null) {
                throw createFsError();
            }
        }
    )
};

await remove();