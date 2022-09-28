/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    return nums.map((_, index) => nums[nums[index]]);
};
