function findKDistantIndices (nums: number[], key: number, k: number): number[] {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== key) {
            continue;
        }
        for (let j = Math.max(i - k, result.length ? result[result.length - 1] + 1 : 0); j < Math.min(i + k + 1, nums.length); j++) {
            result.push(j);
        }
    }
    return result;
}
