function numTrees (n: number): number {
    const dp:number[] = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }
    return dp[n];
}
