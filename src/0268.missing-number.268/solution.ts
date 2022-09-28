function missingNumber (nums: number[]): number {
    const N = nums.length;
    return N * (N + 1) / 2 - nums.reduce((sum, item) => {
        return sum + item;
    }, 0);
}
