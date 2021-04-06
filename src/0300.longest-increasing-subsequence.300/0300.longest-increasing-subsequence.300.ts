function lengthOfLIS (nums: number[]): number {
    const result:number[] = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                result[i] = Math.max(result[i], result[j] + 1);
            }
        }
    }
    return Math.max(...result);
}
