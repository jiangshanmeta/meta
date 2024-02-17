function maximumTop(nums: number[], k: number): number {
    if (k === 0) {
        return nums[0];
    }
    if (nums.length === 1) {
        if (k % 2 === 0) {
            return nums[0]
        }
        return -1;
    }

    let result = k < nums.length ? nums[k] : 0;
    for (let i = 0; i < Math.min(k - 1, nums.length); i++) {
        result = Math.max(result, nums[i])
    }
    return result
};