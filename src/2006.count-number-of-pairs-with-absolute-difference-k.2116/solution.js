/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    const map = {};
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i] + k]) {
            result += map[nums[i] + k];
        }
        if (map[nums[i] - k]) {
            result += map[nums[i] - k];
        }
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    return result;
};
