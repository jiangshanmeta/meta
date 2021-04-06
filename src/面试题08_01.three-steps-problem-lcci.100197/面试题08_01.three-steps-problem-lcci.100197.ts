function waysToStep (n: number): number {
    const dp:number[] = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    const mod = 1000000007;
    for (let i = 3; i < dp.length; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod;
    }
    return dp[n];
}
