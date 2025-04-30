function minOperations (nums: number[], k: number): number {
    nums = [...new Set(nums), ];
    nums.sort((a, b) => a - b);
    if (nums[0] < k) {
        return -1;
    }
    return nums.length - (nums[0] === k ? 1 : 0);
}
