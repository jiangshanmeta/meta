function constructTransformedArray (nums: number[]): number[] {
    const result = new Array<number>(nums.length);
    const L = nums.length;
    for (let i = 0; i < L; i++) {
        result[i] = nums[((i + nums[i]) % L + L) % L];
    }
    return result;
}
