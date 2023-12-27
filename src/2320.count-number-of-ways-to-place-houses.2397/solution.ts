function countHousePlacements (n: number): number {
    const MOD = 10 ** 9 + 7;
    const dp = new Array<number>(n);
    dp[0] = 2;
    if (n > 1) {
        dp[1] = 3;
    }
    for (let i = 2; i < n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
    const m = BigInt(dp[n - 1]);
    return Number(m * m % BigInt(MOD));
}
