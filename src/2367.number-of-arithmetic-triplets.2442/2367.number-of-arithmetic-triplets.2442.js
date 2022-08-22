/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let result = 0;
    const set = new Set(nums);
    for (const num of nums) {
        if (set.has(num + diff) && set.has(num + 2 * diff)) {
            result++;
        }
    }
    return result;
};
