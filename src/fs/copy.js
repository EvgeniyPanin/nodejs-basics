import { createPathVariables } from '../utils/createPathVariables.js';
import { cp } from 'fs';
import path from 'path';
import { createFsError } from '../utils/fsError.js';

const { __dirname } = createPathVariables(import.meta.url);

const copy = async () => {
    cp(
        path.join(__dirname, 'files'),
        path.join(__dirname, 'files_copy'),
        { recursive: true, errorOnExist: true, force: false },
        (err) => {
            if (err !== null) {
                throw createFsError();
            }
        }
    )
};

await copy();
