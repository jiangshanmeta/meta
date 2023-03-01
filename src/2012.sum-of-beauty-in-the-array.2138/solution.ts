function sumOfBeauties (nums: number[]): number {
    const laterMins = new Array<number>(nums.length);
    laterMins[laterMins.length - 1] = nums[nums.length - 1];
    for (let i = laterMins.length - 2; i > -1; i--) {
        laterMins[i] = Math.min(laterMins[i + 1], nums[i]);
    }
    let prevMax = nums[0];
    let result = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > prevMax && nums[i] < laterMins[i + 1]) {
            result += 2;
        } else if (nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) {
            result++;
        }
        prevMax = Math.max(prevMax, nums[i]);
    }
    return result;
}
