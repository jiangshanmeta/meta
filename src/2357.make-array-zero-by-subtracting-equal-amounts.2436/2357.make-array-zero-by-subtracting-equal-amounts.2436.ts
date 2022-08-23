function minimumOperations (nums: number[]): number {
    const set = new Set(nums);
    return set.size - (set.has(0) ? 1 : 0);
}
