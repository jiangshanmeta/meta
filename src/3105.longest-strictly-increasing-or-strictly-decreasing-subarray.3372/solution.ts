function longestMonotonicSubarray (nums: number[]): number {
    let result = 1;
    let increase = 1;
    let decrease = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increase++;
            decrease = 1;
        } else if (nums[i] < nums[i - 1]) {
            decrease++;
            increase = 1;
        } else {
            increase = 1;
            decrease = 1;
        }
        result = Math.max(result, increase, decrease);
    }

    return result;
}
