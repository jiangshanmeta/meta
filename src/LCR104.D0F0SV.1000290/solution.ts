function combinationSum4 (nums: number[], target: number): number {
    const dp = new Array<number>(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] < 0) {
                continue;
            }
            dp[i] += dp[i - nums[j]];
        }
    }
    return dp[target];
}
