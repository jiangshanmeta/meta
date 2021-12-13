/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    return nums.map((value, index) => {
        return {
            value,
            index,
        };
    }).sort((a, b) => {
        if (a.value !== b.value) {
            return b.value - a.value;
        }
        return a.index - b.index;
    }).slice(0, k).sort((a, b) => a.index - b.index).map(item => item.value);
};
