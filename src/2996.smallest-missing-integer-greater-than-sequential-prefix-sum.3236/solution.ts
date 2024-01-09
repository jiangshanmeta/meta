function missingInteger (nums: number[]): number {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }
    const set = new Set(nums);
    let res = sum;
    while (set.has(res)) {
        res++;
    }
    return res;
}
