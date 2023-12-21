function findKthLargest (nums: number[], k: number): number {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}
