/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    const result = [];
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i * 2 < nums.length; i++) {
        while (index1 < nums.length && nums[index1] < 0) {
            index1++;
        }
        result.push(nums[index1++]);
        while (index2 < nums.length && nums[index2] > 0) {
            index2++;
        }
        result.push(nums[index2++]);
    }
    return result;
};
