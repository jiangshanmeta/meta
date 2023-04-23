type F = (...p: any[]) => any

function debounce (fn: F, t: number): F {
    let timeout = 0;
    return function (...args) {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, t) as any;
    };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
