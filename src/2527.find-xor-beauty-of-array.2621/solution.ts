function xorBeauty (nums: number[]): number {
    let xor = 0;
    for (const num of nums) {
        xor ^= num;
    }
    return xor;
}
