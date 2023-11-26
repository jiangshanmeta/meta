function minPairSum (nums: number[]): number {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[nums.length - 1];
    for (let i = 1; i < nums.length / 2; i++) {
        result = Math.max(result, nums[i] + nums[nums.length - i - 1]);
    }
    return result;
}
