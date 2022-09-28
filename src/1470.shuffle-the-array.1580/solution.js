/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    const result = [];
    let index1 = 0;
    let index2 = n;
    while (index2 < nums.length) {
        result.push(nums[index1++]);
        result.push(nums[index2++]);
    }
    return result;
};
