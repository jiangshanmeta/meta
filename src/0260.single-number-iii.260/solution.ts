function singleNumber (nums: number[]): number[] {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    let mask = 1;
    while ((xor & mask) === 0) {
        mask <<= 1;
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & mask) {
            result ^= nums[i];
        }
    }
    return [result, xor ^ result, ];
}
