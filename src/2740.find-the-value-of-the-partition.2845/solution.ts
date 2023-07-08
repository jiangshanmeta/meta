function findValueOfPartition (nums: number[]): number {
    nums.sort((a, b) => a - b);
    let result = nums[1] - nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        result = Math.min(result, nums[i + 1] - nums[i]);
    }
    return result;
}
