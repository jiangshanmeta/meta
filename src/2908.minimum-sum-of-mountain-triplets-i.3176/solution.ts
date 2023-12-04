function minimumSum (nums: number[]): number {
    const rightMins = new Array(nums.length);
    rightMins[rightMins.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i > 1; i--) {
        rightMins[i] = Math.min(rightMins[i + 1], nums[i]);
    }
    let result = Infinity;
    let prev = nums[0];

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > prev && nums[i] > rightMins[i + 1]) {
            result = Math.min(result, nums[i] + prev + rightMins[i + 1]);
        }
        prev = Math.min(prev, nums[i]);
    }
    return result === Infinity ? -1 : result;
}
