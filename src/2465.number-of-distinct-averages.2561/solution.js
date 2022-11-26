/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    const set = new Set();
    while (left < right) {
        set.add((nums[left++] + nums[right--]) / 2);
    }
    return set.size;
};
