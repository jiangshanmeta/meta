function getSumAbsoluteDifferences (nums: number[]): number[] {
    const result:number[] = new Array(nums.length).fill(0);
    let prefix = 0;
    for (let i = 0; i < nums.length; i++) {
        result[i] += nums[i] * i - prefix;
        prefix += nums[i];
    }
    let suffix = 0;
    for (let i = nums.length - 1; i > -1; i--) {
        result[i] += suffix - nums[i] * (nums.length - 1 - i);
        suffix += nums[i];
    }

    return result;
}
