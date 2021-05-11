/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n < 4) {
        return n - 1;
    }
    let result = 1;
    while (n > 4) {
        result = result * 3 % 1000000007;
        n -= 3;
    }
    return result * n % 1000000007;
};
