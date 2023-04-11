function minCapability (nums: number[], k: number): number {
    if (nums.length < 3) {
        return Math.min(...nums);
    }
    let low = 1;
    let high = Math.max(...nums);
    let result = high;
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        // dp[i] 不超过mid的可以盗窃的数量
        const dp = new Array<number>(nums.length);
        dp[0] = nums[0] <= mid ? 1 : 0;
        dp[1] = nums[1] <= mid ? 1 : dp[0];

        for (let i = 2; i < nums.length; i++) {
            dp[i] = dp[i - 1];
            if (nums[i] <= mid) {
                dp[i] = Math.max(dp[i], dp[i - 2] + 1);
            }
        }

        if (dp[dp.length - 1] >= k) {
            result = Math.min(result, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}
