function countKDifference (nums: number[], k: number): number {
    const map = new Map<number, number>();
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i] + k)) {
            result += map.get(nums[i] + k);
        }
        if (map.has(nums[i] - k)) {
            result += map.get(nums[i] - k);
        }
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }

    return result;
}
