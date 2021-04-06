/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
    for (let i = 0; i <= arr.length - m * k; i++) {
        if (check(arr, m, k, i)) {
            return true;
        }
    }
    return false;
};

function check (arr, m, k, start) {
    for (let i = 1; i < k; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[start + j] !== arr[start + i * m + j]) {
                return false;
            }
        }
    }
    return true;
}
