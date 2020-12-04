/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
    return String(helper(n - 1, k - 1));
};

function helper (n, k) {
    if (n === 0) {
        return 0;
    }

    const L = 2 ** (n + 1) - 1;
    const mid = L >>> 1;
    if (k === mid) {
        return 1;
    } else if (k < mid) {
        return helper(n - 1, k);
    } else {
        return helper(n - 1, L - 1 - k) ^ 1;
    }
}
