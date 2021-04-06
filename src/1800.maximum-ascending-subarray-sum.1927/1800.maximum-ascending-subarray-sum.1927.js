/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let result = nums[0];
    let lastMax = nums[0];
    let lastSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > lastMax) {
            lastMax = nums[i];
            lastSum += nums[i];
            result = Math.max(result, lastSum);
        } else {
            lastMax = nums[i];
            lastSum = nums[i];
            result = Math.max(result, lastSum);
        }
    }
    return result;
};
