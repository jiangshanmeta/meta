function longestAlternatingSubarray (nums: number[], threshold: number): number {
    let result = 0;
    let index = 0;
    while (index < nums.length) {
        if (nums[index] % 2 !== 0 || nums[index] > threshold) {
            index++;
            continue;
        }
        const start = index++;
        while (index < nums.length && nums[index] <= threshold && ((nums[index] & 1) ^ (nums[index - 1] & 1))) {
            index++;
        }
        result = Math.max(result, index - start);
    }
    return result;
}
