function rob (nums: number[]): number {
    if (nums.length < 3) {
        return Math.max(...nums);
    }
    const dp1:number[] = new Array(nums.length);
    const dp2:number[] = new Array(nums.length);
    dp1[0] = nums[0];
    dp1[1] = nums[0];
    dp2[0] = 0;
    dp2[1] = nums[1];
    for (let i = 2; i < nums.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
    }

    dp2[dp2.length - 1] = Math.max(dp2[dp2.length - 2], dp2[dp2.length - 3] + nums[dp2.length - 1]);
    // console.log(dp1,dp2)
    return Math.max(dp1[dp1.length - 2], dp2[dp2.length - 1]);
}
