function numSubarrayProductLessThanK (nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let product = 1;
    let result = 0;
    while (left < nums.length) {
        while (right < nums.length && product * nums[right] < k) {
            product *= nums[right++];
        }
        if (right === left) {
            right++;
            left++;
        } else {
            result += right - left;
            product /= nums[left++];
        }
    }
    return result;
}
