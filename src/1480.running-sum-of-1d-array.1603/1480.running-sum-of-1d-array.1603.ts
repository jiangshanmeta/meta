function runningSum (nums: number[]): number[] {
    const result:number[] = new Array(nums.length);
    result[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        result[i] = nums[i] + result[i - 1];
    }
    return result;
}
