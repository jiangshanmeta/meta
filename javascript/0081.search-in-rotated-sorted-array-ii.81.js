/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        while (low < high && nums[low] === nums[low + 1]) {
            low++;
        }
        while (low < high && nums[high] === nums[high - 1]) {
            high--;
        }

        const mid = ((low + high) / 2) | 0;
        if (nums[mid] === target) {
            return true;
        }
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && nums[high] >= target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return false;
};
