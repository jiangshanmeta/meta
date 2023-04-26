type Fn = (...params: any) => any

function memoize (fn: Fn): Fn {
    const trie = new Map<any, any>();
    const key = Symbol();
    return function (...args:any[]) {
        let prev :any = trie;
        let match = true;
        for (let i = 0; i < args.length; i++) {
            if (!prev.has(args[i])) {
                match = false;
                break;
            }
            prev = prev.get(args[i]);
        }
        if (match && prev.has(key)) {
            return prev.get(key);
        }
        const result = fn(...args);
        prev = trie;
        for (let i = 0; i < args.length; i++) {
            if (!prev.has(args[i])) {
                prev.set(args[i], new Map());
            }
            prev = prev.get(args[i]);
        }
        prev.set(key, result);
        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
