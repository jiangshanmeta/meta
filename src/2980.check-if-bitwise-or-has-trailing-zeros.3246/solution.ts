function hasTrailingZeros (nums: number[]): boolean {
    let has = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            if (has) {
                return true;
            }
            has = true;
        }
    }
    return false;
}
