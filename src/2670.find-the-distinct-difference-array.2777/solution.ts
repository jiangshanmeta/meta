function distinctDifferenceArray (nums: number[]): number[] {
    const set = new Set<number>();
    const map2 = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        map2.set(nums[i], map2.has(nums[i]) ? map2.get(nums[i])! + 1 : 1);
    }
    const result = new Array<number>(nums.length);
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
        const c = map2.get(nums[i])!;
        if (c === 1) {
            map2.delete(nums[i]);
        } else {
            map2.set(nums[i], c - 1);
        }

        result[i] = set.size - map2.size;
    }

    return result;
}
