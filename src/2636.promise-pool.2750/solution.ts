type F = () => Promise<any>;

function promisePool (functions: F[], n: number): Promise<any> {
    return new Promise((resolve) => {
        let index = n;
        let count = 0;
        const results = new Array(functions.length);
        if (functions.length === 0) {
            resolve(results);
            return;
        }
        const initial = functions.slice(0, n);
        const handleResponse = (responseIndex:number, result:any) => {
            results[responseIndex] = result;
            count++;
            if (count === functions.length) {
                resolve(results);
            } else if (index < functions.length) {
                functions[index]().then(handleResponse.bind(null, index));
                index++;
            }
        };
        initial.forEach((fn, index) => {
            fn().then(handleResponse.bind(null, index));
        });
    });
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
