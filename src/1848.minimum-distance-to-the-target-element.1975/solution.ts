function getMinDistance (nums: number[], target: number, start: number): number {
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            continue;
        }
        result = Math.min(result, Math.abs(i - start));
    }
    return result;
}
