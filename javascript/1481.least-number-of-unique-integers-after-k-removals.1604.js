/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
    let index = entries.length - 1;
    while (k > 0 && entries[index][1] <= k) {
        k -= entries[index][1];
        index--;
    }
    return index + 1;
};
