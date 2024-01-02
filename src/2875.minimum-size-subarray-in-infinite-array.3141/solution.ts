function minSizeSubarray (nums: number[], target: number): number {
    const SUM = nums.reduce((acc, item) => acc + item, 0);
    const rest = target % SUM;
    const round = (target - rest) / SUM;
    if (rest === 0) {
        return round * nums.length;
    }

    const L = nums.length;
    nums = [...nums, ...nums, ];
    let left = 0;
    let right = 0;
    let res = nums.length;
    let sum = 0;
    while (left < L) {
        while (right < nums.length && sum < rest) {
            sum += nums[right++];
        }
        if (sum === rest) {
            res = Math.min(res, right - left);
        }
        sum -= nums[left++];
    }
    if (res === nums.length) {
        return -1;
    }

    return res + round * L;
}
