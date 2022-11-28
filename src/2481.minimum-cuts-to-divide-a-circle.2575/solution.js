/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
    if (n > 1 && (n & 1)) {
        return n;
    }
    return n >> 1;
};
