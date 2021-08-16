/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const result = new Array(n + 1);
    result[0] = 0;
    for (let i = 1; i < result.length; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};
