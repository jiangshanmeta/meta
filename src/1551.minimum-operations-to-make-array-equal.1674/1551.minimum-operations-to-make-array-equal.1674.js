/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
    const pairs = n >> 1;
    if (n & 1) {
        return pairs * (pairs + 1);
    } else {
        return pairs * pairs;
    }
};
