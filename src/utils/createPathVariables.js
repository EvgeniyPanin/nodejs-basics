import { fileURLToPath } from 'url';
import * as path from 'path';

export const createPathVariables = (url) => {
    const __filename = fileURLToPath(url);
    const __dirname = path.dirname(__filename);
    return { __filename, __dirname };
}