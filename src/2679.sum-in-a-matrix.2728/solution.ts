function matrixSum (nums: number[][]): number {
    for (const row of nums) {
        row.sort((a, b) => b - a);
    }
    let result = 0;
    for (let j = 0; j < nums[0].length; j++) {
        let max = nums[0][j];
        for (let i = 1; i < nums.length; i++) {
            max = Math.max(max, nums[i][j]);
        }
        result += max;
    }
    return result;
}
