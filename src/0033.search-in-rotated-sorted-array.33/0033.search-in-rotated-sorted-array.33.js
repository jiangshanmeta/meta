/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    function findPeak (nums, low, high) {
        while (low <= high) {
            const mid = ((low + high) / 2) | 0;
            const left = mid > 0 ? nums[mid - 1] : -Infinity;
            const right = mid < nums.length - 1 ? nums[mid + 1] : -Infinity;
            if (nums[mid] > left && nums[mid] > right) {
                return mid;
            }
            if (nums[mid] < nums[nums.length - 1]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }

    const length = nums.length - 1;
    const peakIndex = nums[length] > nums[0] ? length : findPeak(nums, 0, length);

    function binarySearch (nums, low, high) {
        while (low <= high) {
            const mid = ((low + high) / 2) | 0;
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    }

    const leftIndex = binarySearch(nums, 0, peakIndex);
    if (leftIndex > -1) {
        return leftIndex;
    }
    return binarySearch(nums, peakIndex + 1, length);
};
