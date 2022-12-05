/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let right = n * (n + 1) / 2;
    let left = 0;
    for (let i = 1; i <= n; i++) {
        left += i;
        if (left === right) {
            return i;
        }
        right -= i;
    }
    return -1;
};
