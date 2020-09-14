/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
    const arr = String(N).split('');
    const L = arr.length;
    for (let i = L - 2; i > -1; i--) {
        // 后面的应该不小于当前的arr[i]，且后面最小的是第一个arr[i+1]
        if (arr[i] > arr[i + 1]) {
            // 后面有比当前小的，则当前-1，后面的置为9
            arr[i]--;
            for (let j = i + 1; j < L; j++) {
                arr[j] = 9;
            }
        }
    }
    return +arr.join('');
};
