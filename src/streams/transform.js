import { Transform } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _, callback) {
            const reversedString = Array.from(chunk.toString()).reverse().join('');
            callback(null, reversedString);
        },
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();