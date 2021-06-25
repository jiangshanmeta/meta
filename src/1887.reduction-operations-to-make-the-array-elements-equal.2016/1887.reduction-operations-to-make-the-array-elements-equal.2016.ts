function reductionOperations (nums: number[]): number {
    nums.sort((a, b) => b - a);
    const counts:number[] = new Array(nums.length).fill(1);
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            result += counts[i - 1];
        }
        counts[i] += counts[i - 1];
    }
    return result;
}
