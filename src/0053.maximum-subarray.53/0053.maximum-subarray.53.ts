function maxSubArray (nums: number[]): number {
    let result:number = nums[0];
    let pre:number = nums[0];
    for (let i = 1; i < nums.length; i++) {
        pre = Math.max(0, pre) + nums[i];
        result = Math.max(result, pre);
    }
    return result;
}
