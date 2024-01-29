import { join } from 'path';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { createPathVariables } from '../utils/createPathVariables.js';

const { __dirname } = createPathVariables(import.meta.url);

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(join(__dirname, 'files/archive.gz'));
    const destination = createWriteStream(join(__dirname, 'files/fileToCompress.txt'));

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();