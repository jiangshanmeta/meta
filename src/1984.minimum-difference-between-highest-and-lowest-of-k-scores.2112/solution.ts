function minimumDifference (nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let result = Infinity;
    for (let i = 0; i + k - 1 < nums.length; i++) {
        result = Math.min(result, nums[i + k - 1] - nums[i]);
    }
    return result;
}
