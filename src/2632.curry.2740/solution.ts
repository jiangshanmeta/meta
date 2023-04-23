function curry (fn: Function): Function {
    const accArgs = [];
    return function curried (...args) {
        accArgs.push(...args);
        if (accArgs.length >= fn.length) {
            return fn(...accArgs);
        }
        return curried;
    };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
