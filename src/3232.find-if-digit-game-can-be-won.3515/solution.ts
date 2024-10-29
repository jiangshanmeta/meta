function canAliceWin (nums: number[]): boolean {
    let one = 0;
    let two = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            one += nums[i];
        } else {
            two += nums[i];
        }
    }
    return one !== two;
}
