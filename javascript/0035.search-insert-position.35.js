/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // 二分
    let low = 0;
    let high = nums.length - 1;
    let index = nums.length;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (nums[mid] >= target) {
            index = Math.min(index, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return index;
};
