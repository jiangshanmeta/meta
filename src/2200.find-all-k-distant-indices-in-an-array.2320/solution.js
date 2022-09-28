/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== key) {
            continue;
        }
        for (let j = Math.max(i - k, result.length ? result[result.length - 1] + 1 : 0); j <= Math.min(i + k, nums.length - 1); j++) {
            result.push(j);
        }
    }
    return result;
};
