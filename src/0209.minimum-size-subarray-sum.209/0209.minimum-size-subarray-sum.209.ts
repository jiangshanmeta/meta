function minSubArrayLen (target: number, nums: number[]): number {
    let result = nums.length + 1;
    let left = 0;
    let right = -1;
    let sum = 0;
    while (left < nums.length) {
        while (right + 1 < nums.length && sum < target) {
            sum += nums[++right];
        }
        if (sum < target) {
            break;
        }
        result = Math.min(result, right - left + 1);
        sum -= nums[left++];
    }
    return result === nums.length + 1 ? 0 : result;
}
