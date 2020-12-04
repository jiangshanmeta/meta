/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0 || x === 1) {
        return 1;
    }
    if (x === 0) {
        return 0;
    }
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }
    let result = 1;
    while (n) {
        if (n & 1) {
            result *= x;
        }
        x *= x;
        n >>>= 1;
    }
    return result;
};
