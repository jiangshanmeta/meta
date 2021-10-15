/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b);
    let result = Infinity;
    for (let i = 0; i + k - 1 < nums.length; i++) {
        result = Math.min(result, nums[i + k - 1] - nums[i]);
    }
    return result;
};
