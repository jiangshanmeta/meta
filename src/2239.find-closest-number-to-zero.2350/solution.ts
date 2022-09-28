function findClosestNumber (nums: number[]): number {
    let result = 0;
    let minDiff = Infinity;
    for (const num of nums) {
        const diff = Math.abs(num);
        if (diff < minDiff) {
            minDiff = diff;
            result = num;
        } else if (diff === minDiff) {
            result = Math.max(result, num);
        }
    }
    return result;
}
