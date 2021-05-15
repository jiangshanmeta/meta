function maxSubArrayLen (nums: number[], k: number): number {
    const map = new Map<number, number>();
    map.set(0, -1);
    let result = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            result = Math.max(result, i - map.get(sum - k));
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return result;
}
