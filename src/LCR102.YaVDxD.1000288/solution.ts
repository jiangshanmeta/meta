function findTargetSumWays (nums: number[], target: number): number {
    const SUM = nums.reduce((sum, item) => sum + item, 0);
    if (target > SUM || target < -SUM) {
        return 0;
    }
    const L = 2 * SUM + 1;
    let prev = new Array<number>(L).fill(0);
    prev[SUM + nums[0]]++;
    prev[SUM - nums[0]]++;
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const next = new Array<number>(L).fill(0);
        for (let j = 0; j < L; j++) {
            if (prev[j]) {
                if (j - num > -1) {
                    next[j - num] += prev[j];
                }
                if (j + num < L) {
                    next[j + num] += prev[j];
                }
            }
        }
        prev = next;
    }
    return prev[SUM + target];
}
