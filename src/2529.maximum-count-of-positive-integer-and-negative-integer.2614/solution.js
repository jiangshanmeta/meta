/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let firstPositive = nums.length;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] > 0) {
            firstPositive = Math.min(firstPositive, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    const positiveCount = nums.length - firstPositive;

    left = 0;
    right = firstPositive - 1;
    let lastNegative = -1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] < 0) {
            lastNegative = Math.max(lastNegative, mid);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    const negativeCount = lastNegative + 1;

    return Math.max(positiveCount, negativeCount);
};
