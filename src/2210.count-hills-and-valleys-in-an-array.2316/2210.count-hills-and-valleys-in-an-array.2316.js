/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    let result = 0;
    let index = 1;
    while (index < nums.length && nums[index] === nums[0]) {
        index++;
    }
    while (index < nums.length - 1) {
        const smallerL = nums[index] < nums[index - 1];
        const num = nums[index++];
        while (index < nums.length && nums[index] === num) {
            index++;
        }
        if (index === nums.length) {
            break;
        }
        const smallerR = num < nums[index];

        if (smallerL === smallerR) {
            result++;
        }
    }
    return result;
};
