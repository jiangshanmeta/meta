/**
 * @param {number} n
 * @return {number}
 */
const mod = 10 ** 9 + 7;
var waysToStep = function (n) {
    const dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i < dp.length; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod;
    }
    return dp[n];
};
