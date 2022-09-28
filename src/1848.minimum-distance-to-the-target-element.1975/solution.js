/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
    let result = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            continue;
        }
        result = Math.min(result, Math.abs(i - start));
    }
    return result;
};
