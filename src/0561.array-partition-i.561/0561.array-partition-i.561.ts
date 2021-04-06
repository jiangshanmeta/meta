function arrayPairSum (nums: number[]): number {
    nums.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i];
    }
    return result;
}
