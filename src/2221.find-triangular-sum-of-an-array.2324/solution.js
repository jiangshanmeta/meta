/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    let length = nums.length;
    while (length > 1) {
        for (let i = 0; i < length - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        length--;
    }
    return nums[0];
};
