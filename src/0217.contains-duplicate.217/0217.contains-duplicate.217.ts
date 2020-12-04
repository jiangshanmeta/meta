function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums);
    return set.size !== nums.length;
};