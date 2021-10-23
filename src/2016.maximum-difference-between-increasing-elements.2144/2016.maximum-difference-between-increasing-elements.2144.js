/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let result = -1;
    let prevMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > prevMin) {
            result = Math.max(result, nums[i] - prevMin);
        } else {
            prevMin = nums[i];
        }
    }
    return result;
};
