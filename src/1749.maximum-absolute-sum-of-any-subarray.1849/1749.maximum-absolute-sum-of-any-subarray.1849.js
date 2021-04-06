/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    const dpMax = new Array(nums.length);
    const dpMin = new Array(nums.length);
    dpMax[0] = nums[0];
    dpMin[0] = nums[0];
    let result = Math.abs(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        dpMax[i] = Math.max(dpMax[i - 1], 0) + nums[i];
        dpMin[i] = Math.min(dpMin[i - 1], 0) + nums[i];
        result = Math.max(result, Math.abs(dpMax[i]), Math.abs(dpMin[i]));
    }

    return result;
};
