function countGoodStrings (low: number, high: number, zero: number, one: number): number {
    const dp = new Array<number>(high + 1).fill(0);
    dp[0] = 1;
    const mod = 10 ** 9 + 7;
    for (let i = 1; i < dp.length; i++) {
        if (i - zero > -1) {
            dp[i] = dp[i - zero];
        }
        if (i - one > -1) {
            dp[i] = (dp[i] + dp[i - one]) % mod;
        }
    }
    let result = 0;
    for (let i = low; i <= high; i++) {
        result = (result + dp[i]) % mod;
    }
    return result;
}
