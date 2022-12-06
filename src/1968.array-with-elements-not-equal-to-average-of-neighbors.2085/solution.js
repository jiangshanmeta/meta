/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    const result = [];
    while (left <= right) {
        result.push(nums[left++]);
        if (left <= right) {
            result.push(nums[right--]);
        }
    }
    return result;
};
