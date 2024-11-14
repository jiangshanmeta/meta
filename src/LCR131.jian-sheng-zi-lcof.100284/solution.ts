function cuttingRope (n: number): number {
    const dp = new Array(n + 1).fill(1);
    for (let i = 2; i < dp.length; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * Math.max(dp[i - j], i - j));
        }
    }
    return dp[n];
}
