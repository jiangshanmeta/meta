function twoSumLessThanK (nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    while (left < right) {
        if (nums[left] + nums[right] >= k) {
            right--;
        } else {
            result = Math.max(result, nums[left] + nums[right]);
            left++;
        }
    }
    return result;
}
