function singleNonDuplicate (nums: number[]): number {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (mid % 2) {
            if (nums[mid] === nums[mid - 1]) {
                low = mid + 1;
            } else if (mid + 1 < nums.length && nums[mid] === nums[mid + 1]) {
                high = mid - 1;
            } else {
                return nums[mid];
            }
        } else {
            if (nums[mid] === nums[mid + 1]) {
                low = mid + 2;
            } else if (mid > 0 && nums[mid] === nums[mid - 1]) {
                high = mid - 2;
            } else {
                return nums[mid];
            }
        }
    }
    return nums[0];
}
