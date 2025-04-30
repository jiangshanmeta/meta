function maxAdjacentDistance (nums: number[]): number {
    const L = nums.length;
    let result = Math.abs(nums[0] - nums[L - 1]);
    for (let i = 1; i < L; i++) {
        result = Math.max(result, Math.abs(nums[i] - nums[i - 1]));
    }
    return result;
}
