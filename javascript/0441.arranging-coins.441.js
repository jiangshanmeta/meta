/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    const max = Math.floor(Math.sqrt(2 * n));
    if (max * (max + 1) > n * 2) {
        return max - 1;
    }
    return max;
};
