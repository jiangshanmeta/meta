function searchInsert (nums: number[], target: number): number {
    let result = nums.length - 1;
    let low = 0;
    let high = nums.length;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
            result = Math.min(result, mid);
        } else {
            return mid;
        }
    }
    return result;
}
