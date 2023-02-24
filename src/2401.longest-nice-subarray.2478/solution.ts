function longestNiceSubarray (nums: number[]): number {
    let result = 1;
    let or = nums[0];
    let left = 0;
    for (let i = 1; i < nums.length; i++) {
        while (nums[i] & or) {
            or ^= nums[left++];
        }

        or |= nums[i];
        result = Math.max(result, i - left + 1);
    }
    return result;
}
