function largestPerimeter (nums: number[]): number {
    nums.sort((a, b) => a - b);
    let sum = nums.reduce((acc, item) => acc + item, 0);
    for (let i = nums.length - 1; i > 1; i--) {
        const rest = sum - nums[i];
        if (rest > nums[i]) {
            return sum;
        }
        sum = rest;
    }
    return -1;
}
