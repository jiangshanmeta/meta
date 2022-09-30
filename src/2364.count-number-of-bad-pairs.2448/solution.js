/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let result = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] - i;
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    for (c of map.values()) {
        result += c * (nums.length - c);
    }
    return result / 2;
};
