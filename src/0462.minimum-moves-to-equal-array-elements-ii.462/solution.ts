// 在求解差的平方和 Σ(x-t)^2 最小时，t 为平均值；差的绝对值之和 Σ|x-t| 最小时，t 为中位数。
function minMoves2 (nums: number[]): number {
    nums.sort((a, b) => a - b);
    const mid = nums[nums.length >> 1];
    return nums.reduce((acc, item) => acc + Math.abs(item - mid), 0);
}
