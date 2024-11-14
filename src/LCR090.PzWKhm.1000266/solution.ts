function rob (nums: number[]): number {
    if (nums.length < 3) {
        return Math.max(...nums);
    }
    const dp1 = new Array<number>(nums.length);
    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);
    const dp2 = new Array<number>(nums.length);
    dp2[0] = 0;
    dp2[1] = nums[1];

    for (let i = 2; i < nums.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
        if (i !== nums.length - 1) {
            dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
        }
    }
    return Math.max(dp1[dp1.length - 2], dp2[dp2.length - 1]);
}
