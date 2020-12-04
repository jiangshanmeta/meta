/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // dp[j] 表示要组成j有多少种方式
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        // dp[j] 加上以coins[i]为结尾的所有可能性
        for (let j = coin; j < dp.length; j++) {
            dp[j] += dp[j - coin];
        }
    }
    return dp[amount];
};
