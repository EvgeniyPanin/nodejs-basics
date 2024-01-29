import * as path from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto'
import { createPathVariables } from '../utils/createPathVariables.js';

const { __dirname } = createPathVariables(import.meta.url);

const calculateHash = async () => {
    const readable = createReadStream(path.join(__dirname, 'files/fileToCalculateHashFor.txt'));
    let chunk;
    let res = '';

    readable.on('readable', () => {
        while (null !== (chunk = readable.read())) {
            res += chunk.toString();
        }
    });
    readable.on('end', function () {
        const hash = createHash('sha256');
        hash.update(res);
        console.log(hash.digest('hex'));
        readable.close();
    })
};

await calculateHash();