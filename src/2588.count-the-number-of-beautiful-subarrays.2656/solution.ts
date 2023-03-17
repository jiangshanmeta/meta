function beautifulSubarrays (nums: number[]): number {
    let result = 0;
    const map = new Map<number, number>();
    map.set(0, 1);
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
        if (map.has(xor)) {
            const count = map.get(xor)!;
            result += count;
            map.set(xor, count + 1);
        } else {
            map.set(xor, 1);
        }
    }
    return result;
}
