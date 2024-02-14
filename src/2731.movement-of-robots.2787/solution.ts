function sumDistance(nums: number[], s: string, d: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (s[i] === 'L') {
            nums[i] -= d;
        } else {
            nums[i] += d;
        }
    }

    nums.sort((a, b) => a - b);

    let result = 0;
    const MOD = 10 ** 9 + 7;
    let pre = 0;
    for (let i = 0; i < nums.length; i++) {
        result = (result + nums[i] * i - pre) % MOD;
        pre += nums[i];
    }

    return result
};