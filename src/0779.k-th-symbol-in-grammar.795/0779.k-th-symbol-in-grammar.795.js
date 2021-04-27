/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    return helper(N, K - 1);
};

function helper (N, K) {
    if (N === 1) {
        return 0;
    }
    const parent = helper(N - 1, K >> 1);
    if (parent === 0) {
        return K & 1;
    } else {
        return (K & 1) ^ 1;
    }
}
