/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
    let index = nums.findIndex((item) => item !== nums[0]);
    if (index === -1) {
        return 0;
    }
    while (index < nums.length - 1) {
        const num = nums[index++];
        let count = 1;
        while (index < nums.length && nums[index] === num) {
            count++;
            index++;
        }
        if (index !== nums.length) {
            result += count;
        }
    }
    return result;
};
