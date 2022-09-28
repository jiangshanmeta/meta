function maxAscendingSum (nums: number[]): number {
    let result = nums[0];
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        max = nums[i];
        result = Math.max(result, sum);
    }
    return result;
}
