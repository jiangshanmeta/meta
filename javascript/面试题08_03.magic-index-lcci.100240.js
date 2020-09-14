/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i) {
            return i;
        }
    }
    return -1;
};
