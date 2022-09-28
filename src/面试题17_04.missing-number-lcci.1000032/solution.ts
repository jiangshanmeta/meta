function missingNumber (nums: number[]): number {
    return nums.length * (nums.length + 1) / 2 - nums.reduce((a, b) => a + b, 0);
}
