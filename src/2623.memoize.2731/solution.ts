type Fn = (...params: any) => any

export function memoize (fn: Fn): Fn {
    const record = new Map<string, any>();
    return function (...args) {
        const key = args.join('|');
        if (!record.has(key)) {
            const result = fn(...args);
            record.set(key, result);
        }

        return record.get(key);
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *   callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
