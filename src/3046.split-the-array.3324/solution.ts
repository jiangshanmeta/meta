function isPossibleToSplit(nums: number[]): boolean {
    const set1 = new Set<number>();
    const set2 = new Set<number>();
    for (const n of nums) {
        if (set2.has(n)) {
            return false;
        }
        if (set1.has(n)) {
            set2.add(n)
        } else {
            set1.add(n)
        }
    }
    return true;
};