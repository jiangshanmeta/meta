function check (nums: number[]): boolean {
    let changed = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (changed) {
                return false;
            }
            if (nums[nums.length - 1] > nums[0]) {
                return false;
            }
            changed = true;
        }
    }
    return true;
}
