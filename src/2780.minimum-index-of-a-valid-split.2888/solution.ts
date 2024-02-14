function minimumIndex(nums: number[]): number {
    const map = new Map<number, number>();
    let maxF = 0;
    let maxFN = 0;
    for (let i = 0; i < nums.length; i++) {
        const c = map.has(nums[i]) ? map.get(nums[i])! + 1 : 1;
        if (c > maxF) {
            maxF = c;
            maxFN = nums[i]
        }
        map.set(nums[i], c);
    }
    if (maxF * 2 <= nums.length) {
        return -1;
    }

    const counts = new Array<number>(nums.length + 1);
    counts[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxFN) {
            counts[i + 1] = counts[i] + 1;
        } else {
            counts[i + 1] = counts[i];
        }
    }
    for (let i = 0; i < nums.length - 1; i++) {
        const lc1 = counts[i + 1];
        if (lc1 * 2 <= (i + 1)) {
            continue;
        }
        const rc1 = counts[nums.length] - counts[i + 1];
        if (rc1 * 2 <= nums.length - i - 1) {
            continue;
        }

        return i;
    }

    return -1;
};