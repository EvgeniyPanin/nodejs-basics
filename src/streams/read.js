import { join } from 'path';
import { createReadStream } from 'fs';
import { createPathVariables } from '../utils/createPathVariables.js';
import { stdout } from 'process';

const { __dirname } = createPathVariables(import.meta.url);

const read = async () => {
    const readable = createReadStream(
        join(__dirname, 'files/fileToRead.txt'),
        { encoding: 'utf-8' },
    );
    readable.pipe(stdout);
};

await read();