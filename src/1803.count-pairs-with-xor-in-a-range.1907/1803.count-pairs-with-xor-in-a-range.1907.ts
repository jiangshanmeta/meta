function countPairs (nums: number[], low: number, high: number): number {
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const xor = nums[i] ^ nums[j];
            if (xor >= low && xor <= high) {
                result++;
            }
        }
    }
    return result;
}
