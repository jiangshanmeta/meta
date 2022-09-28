/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let result = nums[0];
    let minDiff = Math.abs(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        const diff = Math.abs(nums[i]);
        if (diff < minDiff) {
            minDiff = diff;
            result = nums[i];
        } else if (diff === minDiff) {
            result = Math.max(result, nums[i]);
        }
    }
    return result;
};
