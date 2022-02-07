/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    const set = new Set(nums);
    while (set.has(original)) {
        original <<= 1;
    }
    return original;
};
