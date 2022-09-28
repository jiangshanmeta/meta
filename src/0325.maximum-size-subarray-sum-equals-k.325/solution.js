/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    const map = {};
    map[0] = -1;
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - k] !== undefined) {
            result = Math.max(result, i - map[sum - k]);
        }
        if (map[sum] === undefined) {
            map[sum] = i;
        }
    }
    return result;
};
