function shuffle (nums: number[], n: number): number[] {
    const result:number[] = new Array(nums.length);
    for (let i = 0; i < n; i++) {
        result[2 * i] = nums[i];
        result[2 * i + 1] = nums[i + n];
    }
    return result;
}
