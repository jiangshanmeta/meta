function maxArrayValue (nums: number[]): number {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] >= nums[i - 1]) {
            nums[i - 1] += nums[i];
        }
    }
    return Math.max(...nums);
}
