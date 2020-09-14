/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
    arr.sort((a, b) => a - b);
    const mid = (arr.length - 1) >> 1;
    let index1 = 0;
    let index2 = arr.length - 1;
    const result = [];
    while (k > 0) {
        const diff1 = Math.abs(arr[index2] - arr[mid]);
        const diff2 = Math.abs(arr[index1] - arr[mid]);
        if (diff1 >= diff2) {
            result.push(arr[index2--]);
        } else {
            result.push(arr[index1++]);
        }
        k--;
    }
    return result;
};
