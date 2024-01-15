function maximumJumps (nums: number[], target: number): number {
    const dp = new Array<number>(nums.length).fill(-1);
    dp[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] === -1 || Math.abs(nums[i] - nums[j]) > target) {
                continue;
            }
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    return dp[dp.length - 1];
}
