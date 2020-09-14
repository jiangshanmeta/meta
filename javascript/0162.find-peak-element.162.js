/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    function binarySearch (nums, low, high) {
        if (low === high) {
            return low;
        }

        const mid = ((low + high) / 2) | 0;
        const left = mid > 0 ? nums[mid - 1] : -Infinity;
        const right = mid === nums.length - 1 ? -Infinity : nums[mid + 1];
        if (nums[mid] > left && nums[mid] > right) {
            return mid;
        }
        if (nums[mid] > left) {
            return binarySearch(nums, mid + 1, high);
        }
        return binarySearch(nums, low, mid - 1);
    }

    return binarySearch(nums, 0, nums.length - 1);
};
