/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    if (nums.length < 5) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    return Math.min(
        nums[nums.length - 4] - nums[0],
        nums[nums.length - 1] - nums[3],
        nums[nums.length - 3] - nums[1],
        nums[nums.length - 2] - nums[2]
    );
};
