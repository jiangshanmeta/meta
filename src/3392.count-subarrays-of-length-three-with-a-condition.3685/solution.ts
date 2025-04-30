function countSubarrays (nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i + 1] === (nums[i] + nums[i + 2]) * 2) {
            result++;
        }
    }
    return result;
}
