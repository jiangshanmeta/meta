function combinationSum4 (nums: number[], target: number): number {
    const dp:number[] = new Array(target + 1).fill(0);
    dp[0] = 1;
    nums.sort((a, b) => a - b);
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] < 0) {
                break;
            }
            dp[i] += dp[i - nums[j]];
        }
    }
    return dp[dp.length - 1];
}
