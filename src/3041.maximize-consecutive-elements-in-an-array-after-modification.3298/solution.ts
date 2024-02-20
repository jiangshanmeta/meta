function maxSelectedElements(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const dp1 = new Array<number>(nums.length).fill(1);
    const dp2 = new Array<number>(nums.length).fill(1);
    let result = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            dp1[i] = dp1[i - 1];
            dp2[i] = Math.max(dp1[i - 1] + 1, dp2[i - 1])
        } else if (nums[i] === nums[i - 1] + 1) {
            dp1[i] = Math.max(dp1[i - 1] + 1, dp2[i - 1]);
            dp2[i] = dp2[i - 1] + 1;
        } else if (nums[i] === nums[i - 1] + 2) {
            dp1[i] = dp2[i - 1] + 1;
        }
        result = Math.max(result, dp1[i], dp2[i])
    }
    return result
};