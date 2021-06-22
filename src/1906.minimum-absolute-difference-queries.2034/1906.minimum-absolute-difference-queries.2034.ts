function minDifference (nums: number[], queries: number[][]): number[] {
    const prefixCounts:number[][] = new Array(101);
    for (let i = 1; i < 101; i++) {
        prefixCounts[i] = new Array(nums.length + 1).fill(0);
    }
    for (let i = 0; i < nums.length; i++) {
        prefixCounts[nums[i]][i + 1] = 1;
    }
    for (let i = 1; i < 101; i++) {
        for (let j = 1; j < nums.length + 1; j++) {
            prefixCounts[i][j] += prefixCounts[i][j - 1];
        }
    }
    const result = [];
    for (const [l, r, ] of queries) {
        let lastNum = 0;
        let minDiff = Infinity;
        for (let i = 1; i < 101; i++) {
            const count = prefixCounts[i][r + 1] - prefixCounts[i][l];
            if (count === 0) {
                continue;
            }
            if (lastNum === 0) {
                lastNum = i;
                continue;
            }
            minDiff = Math.min(i - lastNum, minDiff);
            lastNum = i;
        }
        result.push(minDiff === Infinity ? -1 : minDiff);
    }
    return result;
}
