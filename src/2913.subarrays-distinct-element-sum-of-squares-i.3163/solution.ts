function sumCounts (nums: number[]): number {
    const MOD = 10 ** 9 + 7;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        const s = new Set<number>();
        for (let j = i; j < nums.length; j++) {
            s.add(nums[j]);
            res = (res + s.size ** 2) % MOD;
        }
    }
    return res;
}
