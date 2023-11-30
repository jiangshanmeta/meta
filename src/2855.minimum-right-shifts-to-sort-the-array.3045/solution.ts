function minimumRightShifts (nums: number[]): number {
    let index = -1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            continue;
        }
        if (index !== -1) {
            return -1;
        }
        index = i;
    }

    if (index === -1) {
        return 0;
    }
    if (nums[nums.length - 1] > nums[0]) {
        return -1;
    }
    return nums.length - index;
}
