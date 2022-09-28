/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let result = 0;
    while (n) {
        const mod = n % k;
        result += mod;
        n = (n - mod) / k;
    }
    return result;
};
