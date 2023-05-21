type F = (...args: any[]) => void

function throttle (fn: F, t: number): F {
    let nextCallTime = Date.now();
    let pendingArgs;

    const callWithPending = (...args:any) => {
        fn(...args);
        nextCallTime = Date.now() + t;
        setTimeout(() => {
            if (pendingArgs) {
                callWithPending(...pendingArgs);
                pendingArgs = null;
            }
        }, t);
    };

    return function (...args) {
        const current = Date.now();
        if (current > nextCallTime) {
            callWithPending(...args);
        } else {
            pendingArgs = args;
        }
    };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
