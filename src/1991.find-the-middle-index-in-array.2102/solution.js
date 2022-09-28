/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    const total = nums.reduce((sum, item) => {
        return sum + item;
    }, 0);

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum === total - nums[i] - sum) {
            return i;
        }
        sum += nums[i];
    }

    return -1;
};
