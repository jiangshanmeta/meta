function checkArray(nums: number[], k: number): boolean {
    const L = nums.length;
    const diffs = new Array<number>(L + 1).fill(0);
    let delta = 0;
    for (let i = 0; i < nums.length; i++) {
        delta += diffs[i];
        const item = nums[i] - delta;
        if (item < 0) {
            return false;
        }
        if (item === 0) {
            continue;
        }
        const end = i + k;
        if (end > L) {
            return false;
        }
        delta += item;
        diffs[end] -= item;
    }
    return true;
};