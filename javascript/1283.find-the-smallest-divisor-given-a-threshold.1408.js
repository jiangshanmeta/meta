/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let low = 1;
    let high = Math.max(...nums);
    let result = high;
    while (low <= high) {
        const mid = (low + high) >> 1;
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Math.ceil(nums[i] / mid);
        }
        if (sum > threshold) {
            low = mid + 1;
        } else {
            result = Math.min(result, mid);
            high = mid - 1;
        }
    }

    return result;
};
