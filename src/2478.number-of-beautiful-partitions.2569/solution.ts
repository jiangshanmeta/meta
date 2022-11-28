function beautifulPartitions (s: string, k: number, minLength: number): number {
    const primeSet = new Set('2357');
    if (s.length < k * minLength || !primeSet.has(s[0]) || primeSet.has(s[s.length - 1])) {
        return 0;
    }
    const mod = 10 ** 9 + 7;
    const dp = new Array<number[]>(s.length + 1);
    dp[0] = new Array(k + 1).fill(0);
    dp[0][0] = 1;
    for (let i = 1; i < dp.length; i++) {
        dp[i] = new Array(k + 1).fill(0);
        if (primeSet.has(s[i - 1])) {
            continue;
        }
        for (let m = i - minLength; m > -1; m--) {
            if (primeSet.has(s[m])) {
                for (let j = 1; j < k + 1; j++) {
                    dp[i][j] = (dp[i][j] + dp[m][j - 1]) % mod;
                }
            }
        }
    }

    return dp[s.length][k];
}
