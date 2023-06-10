async function promiseAll<T> (functions: (() => Promise<T>)[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        }
        const results = new Array<T>(functions.length);
        let count = 0;
        functions.forEach((fn, index) => {
            fn().then((val) => {
                results[index] = val;
                count++;
                if (count === functions.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
