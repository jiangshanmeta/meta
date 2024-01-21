function numberOfWays (startPos: number, endPos: number, k: number): number {
    const D = Math.abs(startPos - endPos);
    if (D > k) {
        return 0;
    }
    let dp = new Array<number>(2 * k + 1).fill(0);
    dp[k] = 1;
    const MOD = 10 ** 9 + 7;
    for (let i = 0; i < k; i++) {
        const nDp = new Array<number>(dp.length).fill(0);
        for (let j = 0; j < dp.length; j++) {
            if (j > 0) {
                nDp[j - 1] = (nDp[j - 1] + dp[j]) % MOD;
            }
            if (j + 1 < dp.length) {
                nDp[j + 1] = (nDp[j + 1] + dp[j]) % MOD;
            }
        }
        dp = nDp;
    }
    return dp[k + D];
}
