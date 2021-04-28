/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
    for (let i = 1; i < nums.length; i++) {
        const contain = nums[i] - nums[i - 1] - 1;
        if (k > contain) {
            k -= contain;
        } else {
            return nums[i - 1] + k;
        }
    }
    return nums[nums.length - 1] + k;
};
