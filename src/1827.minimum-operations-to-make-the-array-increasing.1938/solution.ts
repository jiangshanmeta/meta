function minOperations (nums: number[]): number {
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            result += (nums[i - 1] - nums[i] + 1);
            nums[i] = nums[i - 1] + 1;
        }
    }
    return result;
}
