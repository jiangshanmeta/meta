function coinChange (coins: number[], amount: number): number {
    const dp = new Array<number>(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] < 0) {
                continue;
            }
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
