/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let result = nums.length;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (nums[mid] > target) {
            high = mid - 1;
            result = Math.min(result, mid);
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return result;
};
