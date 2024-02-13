function maximumSubarraySum(nums: number[], k: number): number {
    const sums = new Array<number>(nums.length + 1)
    sums[0] = 0;
    const map = new Map<number, number>();
    let result = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sums[i + 1] = sums[i] + nums[i];
        if (map.has(nums[i] - k)) {
            const prevIndex = map.get(nums[i] - k)!;
            result = Math.max(result, sums[i + 1] - sums[prevIndex])
        }
        if (map.has(nums[i] + k)) {
            const prevIndex = map.get(nums[i] + k)!;
            result = Math.max(result, sums[i + 1] - sums[prevIndex])
        }

        if (map.has(nums[i])) {
            const sum = sums[i] - sums[map.get(nums[i])!];
            if (sum < 0) {
                map.set(nums[i], i)
            }
        } else {
            map.set(nums[i], i);
        }
    }
    return result === -Infinity ? 0 : result
};