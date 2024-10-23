function minOperations (nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let l = 0;
    let h = nums.length - 1;
    let res = nums.length;
    while (l <= h) {
        const mid = (l + h) >> 1;
        if (nums[mid] < k) {
            l = mid + 1;
        } else {
            res = mid;
            h = mid - 1;
        }
    }

    return res;
}
