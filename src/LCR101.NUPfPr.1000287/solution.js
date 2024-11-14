/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((sum, item) => {
        return sum + item;
    }, 0);
    if (sum % 2 === 1) {
        return false;
    }
    const half = sum >> 1;
    const dp = new Array(half + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = dp.length - 1; j - nums[i] > -1; j--) {
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }
    return dp[half];
};
