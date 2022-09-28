/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    const map = new Map();
    for (const subnums of nums) {
        for (const num of subnums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }
    }
    const result = [];
    for (const [key, count, ] of map) {
        if (count === nums.length) {
            result.push(key);
        }
    }
    return result.sort((a, b) => a - b);
};
