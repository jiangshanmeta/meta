function minimumCost (nums: number[]): number {
    let min1 = Infinity;
    let min2 = Infinity;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min1) {
            min2 = min1;
            min1 = nums[i];
        } else if (nums[i] < min2) {
            min2 = nums[i];
        }
    }
    return nums[0] + min1 + min2;
}
