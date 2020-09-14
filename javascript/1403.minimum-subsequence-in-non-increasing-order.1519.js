/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => b - a);
    let restSum = nums.reduce((sum, item) => {
        return sum + item;
    }, 0);
    const result = [];
    let sum = 0;
    let index = 0;
    while (sum <= restSum) {
        const item = nums[index++];
        result.push(item);
        sum += item;
        restSum -= item;
    }
    return result;
};
