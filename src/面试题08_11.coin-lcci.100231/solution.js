/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    const dp = new Array(n + 1).fill(1);
    const coins = [
        5,
        10,
        25,
    ];
    const mod = 1000000007;

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        for (let j = coin; j <= n; j++) {
            dp[j] = (dp[j] + dp[j - coin]) % mod;
        }
    }
    return dp[n];
};
