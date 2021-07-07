/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    // 数字都是正数 所以只需要找到最大的两个和最小的两个即可
    // 偷懒排序 事件复杂度O(NlogN)
    // 自己手动找最大的最小的可以优化到O(N)
    nums.sort((a, b) => a - b);
    return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};
