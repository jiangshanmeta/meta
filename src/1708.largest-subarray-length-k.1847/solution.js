/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var largestSubarray = function (nums, k) {
    let resultStart = 0;
    for (let i = 1; i < nums.length + 1 - k; i++) {
        if (isLarger(i, resultStart, nums, k)) {
            resultStart = i;
        }
    }
    return nums.slice(resultStart, resultStart + k);
};

function isLarger (index1, index2, nums, k) {
    for (let i = 0; i < k; i++) {
        if (nums[index1 + i] > nums[index2 + i]) {
            return true;
        } else if (nums[index1 + i] < nums[index2 + i]) {
            return false;
        }
    }
    return false;
}
