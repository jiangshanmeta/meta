function pivotIndex (nums: number[]): number {
    const total = nums.reduce((sum, item) => sum + item, 0);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (left === total - nums[i] - left) {
            return i;
        }
        left += nums[i];
    }
    return -1;
}
