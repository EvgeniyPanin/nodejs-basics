import { join } from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { createPathVariables } from '../utils/createPathVariables.js';

const { __dirname } = createPathVariables(import.meta.url);

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(join(__dirname, 'files/fileToCompress.txt'));
    const destination = createWriteStream(join(__dirname, 'files/archive.gz'));

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();