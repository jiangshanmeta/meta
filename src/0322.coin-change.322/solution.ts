function coinChange (coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j < dp.length; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }
    if (dp[amount] === Infinity) {
        return -1;
    }
    return dp[amount];
}
