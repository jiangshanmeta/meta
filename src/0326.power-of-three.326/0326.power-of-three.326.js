/**
 * @param {number} n
 * @return {boolean}
 */
// 暴力算的
var isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    }

    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
};
