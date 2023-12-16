function maximumTripletValue (nums: number[]): number {
    let res = -1;
    let max = Math.max(nums[0], nums[1]);
    let diff = nums[0] - nums[1];
    for (let i = 2; i < nums.length; i++) {
        res = Math.max(res, diff * nums[i]);
        diff = Math.max(diff, max - nums[i]);
        max = Math.max(max, nums[i]);
    }
    return Math.max(0, res);
}
