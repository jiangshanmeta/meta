function minOperations (nums: number[], k: number): number {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    let res = 0;
    while (xor || k) {
        if ((xor & 1) !== (k & 1)) {
            res++;
        }
        xor >>= 1;
        k >>= 1;
    }
    return res;
}
