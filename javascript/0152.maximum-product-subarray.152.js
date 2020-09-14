/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let result = nums[0];
    let max = nums[0];
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const minP = min * nums[i];
        const maxP = max * nums[i];
        // min max 是最后一个元素的nums[i]的连续子序列的最值
        max = Math.max(nums[i], minP, maxP);
        min = Math.min(nums[i], minP, maxP);
        result = Math.max(result, max);
    }
    return result;
};
