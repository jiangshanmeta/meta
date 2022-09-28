/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    const set = new Set(nums);
    return set.size - (set.has(0) ? 1 : 0);
};
