function createTargetArray (nums: number[], index: number[]): number[] {
    const result:number[] = [];
    for (let i = 0; i < nums.length; i++) {
        result.splice(index[i], 0, nums[i]);
    }
    return result;
}
