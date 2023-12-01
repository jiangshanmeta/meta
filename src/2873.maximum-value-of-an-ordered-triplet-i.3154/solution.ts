function maximumTripletValue (nums: number[]): number {
    let result = 0;
    let diff = Math.max(0, nums[0] - nums[1]);
    let max = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        result = Math.max(result, diff * nums[i]);
        diff = Math.max(diff, max - nums[i]);
        max = Math.max(max, nums[i]);
    }
    return result;
}
