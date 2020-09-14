/**
 * @param {number} n
 * @return {number}
 */
const mod = 10 ** 9 + 7;
var fib = function (n) {
    if (n === 0) {
        return 0;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        [
            a, b, ] = [
            b, (a + b) % mod, ];
    }
    return b;
};
