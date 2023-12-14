function maxSum (nums: number[], m: number, k: number): number {
    let res = 0;
    const map = new Map<number, number>();
    let sum = 0;
    for (let i = 0; i < k - 1; i++) {
        sum += nums[i];
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let i = k - 1; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
        } else {
            map.set(nums[i], 1);
        }

        if (map.size >= m) {
            res = Math.max(res, sum);
        }

        sum -= nums[i - (k - 1)];
        const c = map.get(nums[i - (k - 1)])!;
        if (c === 1) {
            map.delete(nums[i - (k - 1)]);
        } else {
            map.set(nums[i - (k - 1)], c - 1);
        }
    }
    return res;
}
