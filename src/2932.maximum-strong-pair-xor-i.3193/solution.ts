function maximumStrongPairXor (nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
                result = Math.max(result, nums[i] ^ nums[j]);
            }
        }
    }
    return result;
}
