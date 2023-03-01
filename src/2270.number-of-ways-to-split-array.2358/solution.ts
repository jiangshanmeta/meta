function waysToSplitArray (nums: number[]): number {
    const SUM = nums.reduce((acc, item) => acc + item, 0);
    let prefix = 0;
    let result = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        prefix += nums[i];
        if (prefix >= SUM - prefix) {
            result++;
        }
    }
    return result;
}
