function massage (nums: number[]): number {
    if (nums.length < 3) {
        return Math.max(...nums, 0);
    }
    const dp:number[] = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[dp.length - 1];
}
