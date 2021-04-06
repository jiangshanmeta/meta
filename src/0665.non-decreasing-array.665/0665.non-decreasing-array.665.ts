function checkPossibility (nums: number[]): boolean {
    let changed = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (changed) {
                return false;
            }
            changed = true;
            if (i === 1) {
                nums[0] = nums[1];
            } else {
                if (nums[i] >= nums[i - 2]) {
                    nums[i - 1] = nums[i - 2];
                } else {
                    nums[i] = nums[i - 1];
                }
            }
        }
    }
    return true;
}
