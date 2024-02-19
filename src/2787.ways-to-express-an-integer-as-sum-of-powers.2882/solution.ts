function numberOfWays(n: number, x: number): number {
    const dp = new Array<number>(n + 1).fill(0);
    dp[0] = 1;
    const MOD = 10 ** 9 + 7;
    for (let i = 1; i <= n; i++) {
        const item = i ** x;
        if (item > n) {
            break;
        }
        for (let j = n; j - item >= 0; j--) {
            if (dp[j - item] > 0) {
                dp[j] = (dp[j] + dp[j - item]) % MOD;
            }
        }
    }
    return dp[n]
};