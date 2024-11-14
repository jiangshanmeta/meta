function minSubArrayLen (target: number, nums: number[]): number {
    let result = nums.length + 1;
    let left = 0;
    let right = 0;
    let sum = 0;
    while (right < nums.length) {
        sum += nums[right++];
        if (sum < target) {
            continue;
        }
        result = Math.min(result, right - left);
        while (left < right && sum >= target) {
            result = Math.min(result, right - left);
            sum -= nums[left++];
        }
    }

    return result === nums.length + 1 ? 0 : result;
}
