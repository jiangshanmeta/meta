/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    const queenAll = [
        nums[0], ];
    const queenMax = [
        nums[0], ];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + Math.max(queenMax[0], 0);
        if (queenAll.length === k) {
            if (queenAll[0] === queenMax[0]) {
                queenMax.shift();
            }
            queenAll.shift();
        }
        queenAll.push(dp[i]);
        while (queenMax.length && queenMax[queenMax.length - 1] < dp[i]) {
            queenMax.pop();
        }
        queenMax.push(dp[i]);
    }

    return Math.max(...dp);
};
