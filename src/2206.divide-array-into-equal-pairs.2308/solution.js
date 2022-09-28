/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    for (const count of map.values()) {
        if (count % 2 !== 0) {
            return false;
        }
    }
    return true;
};
