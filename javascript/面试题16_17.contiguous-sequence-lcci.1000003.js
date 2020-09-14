/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let prev = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prev = prev < 0 ? nums[i] : prev + nums[i];
        result = Math.max(result, prev);
    }
    return result;
};
