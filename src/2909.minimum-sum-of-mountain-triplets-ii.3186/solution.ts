function minimumSum (nums: number[]): number {
    let result = Infinity;
    const afterMin = new Array<number>(nums.length);
    afterMin[afterMin.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i > 1; i--) {
        afterMin[i] = Math.min(afterMin[i + 1], nums[i]);
    }
    let prev = nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > prev && nums[i] > afterMin[i + 1]) {
            result = Math.min(result, nums[i] + prev + afterMin[i + 1]);
        }
        prev = Math.min(prev, nums[i]);
    }
    return result === Infinity ? -1 : result;
}
