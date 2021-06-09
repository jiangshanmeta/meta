function arraySign (nums: number[]): number {
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            result = -result;
        } else if (nums[i] === 0) {
            return 0;
        }
    }
    return result;
}
