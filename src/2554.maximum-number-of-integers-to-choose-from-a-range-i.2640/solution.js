/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
    const set = new Set(banned);
    let sum = 0;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (set.has(i)) {
            continue;
        }
        sum += i;
        if (sum <= maxSum) {
            result++;
        } else {
            break;
        }
    }
    return result;
};
