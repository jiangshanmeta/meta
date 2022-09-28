function areNumbersAscending (s: string): boolean {
    const nums = s.split(' ').filter((item) => /^\d+$/.test(item)).map(item => +item);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            return false;
        }
    }
    return true;
}
