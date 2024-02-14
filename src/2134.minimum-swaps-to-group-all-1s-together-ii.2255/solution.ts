function minSwaps(nums: number[]): number {
    const counts = new Array<number>(nums.length + 1)
    counts[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            counts[i + 1] = counts[i] + 1
        } else {
            counts[i + 1] = counts[i];
        }
    }
    const K = counts[nums.length];
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        let end = i + K - 1;
        let sum = 0;
        if (end >= nums.length) {
            sum = counts[end - nums.length + 1];
            end = nums.length - 1;
        }
        sum += counts[end + 1] - counts[i];
        result = Math.min(result, K - sum)
    }

    return result
};