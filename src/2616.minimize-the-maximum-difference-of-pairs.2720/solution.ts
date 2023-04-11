function minimizeMax (nums: number[], p: number): number {
    let result = 2 * 10 ** 9;
    let left = 0;
    let right = 2 * 10 ** 9;
    nums.sort((a, b) => a - b);

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        let count = 0;
        let i = 0;
        while (i < nums.length) {
            if (i + 1 < nums.length && nums[i + 1] - nums[i] <= mid) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }

        if (count < p) {
            left = mid + 1;
        } else {
            result = Math.min(result, mid);
            right = mid - 1;
        }
    }
    return result;
}
