function maxSubArray (nums: number[]): number {
    let result = nums[0];
    let dp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp = Math.max(0, dp) + nums[i];
        result = Math.max(result, dp);
    }
    return result;
}
