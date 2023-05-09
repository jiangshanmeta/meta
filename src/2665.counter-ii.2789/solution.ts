type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter (init: number): ReturnObj {
    let value = init;

    return {
        increment () {
            return ++value;
        },
        decrement () {
            return --value;
        },
        reset () {
            value = init;
            return value;
        },
    };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
