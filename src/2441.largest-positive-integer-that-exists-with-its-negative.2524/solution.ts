function findMaxK (nums: number[]): number {
    let result = -1;
    const set = new Set(nums);
    for (const num of set) {
        if (num < 0) {
            continue;
        }
        if (set.has(-num)) {
            result = Math.max(result, num);
        }
    }
    return result;
}
