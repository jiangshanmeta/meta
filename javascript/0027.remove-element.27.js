/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let index = nums.length - 1;
    while (index > -1) {
        if (nums[index] === val) {
            nums.splice(index, 1);
        }
        index--;
    }
    return nums.length;
};
