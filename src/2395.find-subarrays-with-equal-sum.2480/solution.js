/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    const set = new Set();
    for (let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1];
        if (set.has(sum)) {
            return true;
        }
        set.add(sum);
    }
    return false;
};
