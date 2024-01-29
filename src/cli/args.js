const parseArgs = () => {
    const args = {};
    process.argv.forEach((arg, i, arr) => {
        if (arg.startsWith('--')) {
            let value;
            if (arr[i + 1] && !arr[i + 1].startsWith('--')) {
                value = arr[i + 1];
            } else {
                value = '';
            }
            if (value) {
                args[arg] = value;
            }
        }
    });
    const result = Object.entries(args)
        .map(([key, value]) => `${key} is ${value}`)
        .join(', ')
    console.log(result);
};

parseArgs();