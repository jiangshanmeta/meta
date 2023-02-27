function minimumAverageDifference (nums: number[]): number {
    let min = Infinity;
    let result = -1;
    const SUM = nums.reduce((acc, item) => acc + item, 0);
    let prefix = 0;
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        const avg1 = Math.floor(prefix / (i + 1));
        const avg2 = i === nums.length - 1 ? 0 : Math.floor((SUM - prefix) / (nums.length - i - 1));
        const val = Math.abs(avg1 - avg2);
        if (val < min) {
            min = val;
            result = i;
        }
    }
    return result;
}
