function minSubarray (nums: number[], p: number): number {
    const MOD = nums.reduce((sum, item) => sum + item, 0) % p;
    if (MOD === 0) {
        return 0;
    }
    const map = new Map<number, number>();
    map.set(0, -1);
    let sum = 0;
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        sum = (sum + nums[i]) % p;
        const prev = (sum + p - MOD) % p;

        if (map.has(prev)) {
            result = Math.min(result, i - map.get(prev)!);
        }
        map.set(sum, i);
    }
    return result === nums.length ? -1 : result;
}
