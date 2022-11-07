function applyOperations (nums: number[]): number[] {
    let index = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            continue;
        }

        if (nums[i] === nums[i + 1]) {
            nums[index++] = nums[i] * 2;
            nums[i + 1] = 0;
        } else {
            nums[index++] = nums[i];
        }
    }
    if (nums[nums.length - 1] !== 0) {
        nums[index++] = nums[nums.length - 1];
    }

    while (index < nums.length) {
        nums[index++] = 0;
    }
    return nums;
}
