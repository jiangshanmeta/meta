function findFinalValue (nums: number[], original: number): number {
    const set = new Set(nums);
    while (set.has(original)) {
        original <<= 1;
    }
    return original;
}
