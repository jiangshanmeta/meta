function countSpecialSubsequences (nums: number[]): number {
    const MOD = 10 ** 9 + 7;
    let dp = [0, 0, 0, ];
    for (let i = 0; i < nums.length; i++) {
        const nDp = [...dp, ];
        if (nums[i] === 0) {
            nDp[0] = (nDp[0] + dp[0] + 1) % MOD;
        } else if (nums[i] === 1) {
            nDp[1] = (nDp[1] + dp[0] + dp[1]) % MOD;
        } else {
            nDp[2] = (nDp[2] + dp[1] + dp[2]) % MOD;
        }
        dp = nDp;
    }
    return dp[2];
}
