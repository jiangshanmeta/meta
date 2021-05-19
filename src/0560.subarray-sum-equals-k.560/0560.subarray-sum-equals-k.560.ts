function subarraySum (nums: number[], k: number): number {
    const map = new Map<number, number>();
    map.set(0, 1);
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            result += map.get(sum - k);
        }

        map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1);
    }
    return result;
}
