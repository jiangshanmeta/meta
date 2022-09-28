function singleNumbers (nums: number[]): number[] {
    let xors = 0;
    for (let i = 0; i < nums.length; i++) {
        xors ^= nums[i];
    }
    let mask = 1;
    while ((xors & mask) === 0) {
        mask <<= 1;
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & mask) {
            result ^= nums[i];
        }
    }
    return [
        result,
        xors ^ result,
    ];
}
