function countSubarrays (nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let sum = 0;
    let res = 0;
    while (left < nums.length) {
        while (right < nums.length && (sum + nums[right]) * (right - left + 1) < k) {
            sum += nums[right++];
        }
        res += right - left;
        sum -= nums[left++];
    }
    return res;
}
