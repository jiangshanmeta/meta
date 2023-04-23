type Fn = (...params: any[]) => Promise<any>;

export function timeLimit (fn: Fn, t: number): Fn {
    return async function (...args) {
        return Promise.race([
            fn(...args),
            // eslint-disable-next-line promise/param-names
            new Promise((_, reject) => {
                // eslint-disable-next-line prefer-promise-reject-errors
                setTimeout(() => reject('Time Limit Exceeded'), t);
            }),
        ]);
    };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
