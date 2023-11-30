function minOperations (nums: number[], k: number): number {
    const flags = new Array<boolean>(k + 1);
    let rest = k;
    let index = nums.length - 1;
    while (index > -1) {
        const n = nums[index];
        if (n > k) {
            index--;
            continue;
        }
        if (!flags[n]) {
            flags[n] = true;
            rest--;
            if (rest === 0) {
                return nums.length - index;
            }
        }

        index--;
    }
    return 0;
}
