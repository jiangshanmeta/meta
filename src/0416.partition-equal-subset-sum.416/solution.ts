function canPartition (nums: number[]): boolean {
    const sum = nums.reduce((sum, item) => {
        return sum + item;
    }, 0);
    if (sum & 1) {
        return false;
    }

    const dp:boolean[] = new Array((sum >> 1) + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let j = dp.length - 1; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }
    return dp[dp.length - 1];
}
