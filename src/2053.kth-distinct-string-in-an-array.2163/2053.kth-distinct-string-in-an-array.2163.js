/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const map = new Map();
    for (const item of arr) {
        if (map.has(item)) {
            map.set(item, false);
        } else {
            map.set(item, true);
        }
    }
    for (const item of arr) {
        if (!map.get(item)) {
            continue;
        }
        k--;
        if (k === 0) {
            return item;
        }
    }

    return '';
};
