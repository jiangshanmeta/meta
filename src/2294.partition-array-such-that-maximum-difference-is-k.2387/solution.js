/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    let result = 0;
    let index = 0;
    while (index < nums.length) {
        result++;
        const base = nums[index++];
        while (index < nums.length && nums[index] - base <= k) {
            index++;
        }
    }
    return result;
};
