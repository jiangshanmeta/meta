/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function (arr, d) {
    const results = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        helper(arr, i, d, results);
    }
    return Math.max(...results);
};
// 直接按记忆化递归实现了
function helper (arr, index, d, results) {
    if (results[index] !== 0) {
        return results[index];
    }
    results[index] = 1;
    for (let i = 1; i <= d; i++) {
        if (index + i === arr.length) {
            break;
        }
        if (arr[index + i] >= arr[index]) {
            break;
        }
        if (arr[index + i] < arr[index]) {
            results[index] = Math.max(results[index], helper(arr, index + i, d, results) + 1);
        }
    }
    for (let i = 1; i <= d; i++) {
        if (index - i < 0) {
            break;
        }
        if (arr[index - i] >= arr[index]) {
            break;
        }
        if (arr[index - i] < arr[index]) {
            results[index] = Math.max(results[index], helper(arr, index - i, d, results) + 1);
        }
    }

    return results[index];
}
