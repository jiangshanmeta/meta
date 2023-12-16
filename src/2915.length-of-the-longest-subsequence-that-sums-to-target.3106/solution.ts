function lengthOfLongestSubsequence (nums: number[], target: number): number {
    const dp = new Array<number>(target + 1).fill(0);
    for (const num of nums) {
        for (let j = target; j > num; j--) {
            if (dp[j - num] > 0) {
                dp[j] = Math.max(dp[j], dp[j - num] + 1);
            }
        }
        dp[num] = Math.max(dp[num], 1);
    }
    return dp[target] === 0 ? -1 : dp[target];
}
