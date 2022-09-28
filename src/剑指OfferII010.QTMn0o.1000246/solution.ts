function subarraySum (nums: number[], k: number): number {
    const map = new Map<number, number>();
    map.set(0, 1);
    let sum = 0;
    let result = 0;
    for (const item of nums) {
        sum += item;
        if (map.has(sum - k)) {
            result += map.get(sum - k);
        }
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }
    return result;
}
