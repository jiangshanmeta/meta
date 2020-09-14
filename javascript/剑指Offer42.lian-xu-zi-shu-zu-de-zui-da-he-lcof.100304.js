/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let result = nums[0];
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prev = (prev < 0 ? 0 : prev) + nums[i];
        result = Math.max(result, prev);
    }
    return result;
};
