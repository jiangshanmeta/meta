function getMaximumXor (nums: number[], maximumBit: number): number[] {
    const result:number[] = [];
    let xors = 0;
    const mask = (1 << maximumBit) - 1;
    for (let i = 0; i < nums.length; i++) {
        xors ^= nums[i];
        // ^k 后尽可能最大 即尽可能更多的1
        // mask|xors 构造出这个最大的数字
        // 然后利用xor的性质 ^xor 即可得到k
        result.push((mask | xors) ^ xors);
    }

    return result.reverse();
}
