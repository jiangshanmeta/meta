function minAbsoluteDifference (nums: number[], x: number): number {
    let result = Math.abs(nums[nums.length - 1] - nums[0]);

    for (let i = x; i < nums.length; i++) {
        let j = i - x;
        while (j > 0 && nums[j] < nums[j - 1]) {
            const tmp = nums[j - 1];
            nums[j - 1] = nums[j];
            nums[j--] = tmp;
        }

        let l = 0;
        let r = i - x;
        while (l <= r) {
            const m = (l + r) >> 1;
            if (nums[m] < nums[i]) {
                result = Math.min(result, nums[i] - nums[m]);
                l = m + 1;
            } else if (nums[m] > nums[i]) {
                result = Math.min(result, nums[m] - nums[i]);
                r = m - 1;
            } else {
                return 0;
            }
        }
    }

    return result;
}
