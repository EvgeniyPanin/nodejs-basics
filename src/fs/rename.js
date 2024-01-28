import { createPathVariables } from '../utils/createPathVariables.js';
import fs from 'fs';
import path from 'path';
import { createFsError } from '../utils/fsError.js';

const { __dirname } = createPathVariables(import.meta.url);

const rename = async () => {
    const resultPath = path.join(__dirname, 'files/properFilename.md')
    fs.stat(resultPath, (_, stat) => {
        if (stat) {
            throw createFsError();
        }
    })
    fs.rename(
        path.join(__dirname, 'files/wrongFilename.txt'),
        resultPath,
        (err) => {
            if (err !== null) {
                throw createFsError();
            }
        }
    )
};

await rename();