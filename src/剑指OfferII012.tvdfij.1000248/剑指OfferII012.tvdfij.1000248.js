/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const prefixs = new Array(nums.length);
    prefixs[0] = 0;
    for (let i = 1; i < prefixs.length; i++) {
        prefixs[i] = prefixs[i - 1] + nums[i - 1];
    }
    let sum = prefixs[prefixs.length - 1] + nums[nums.length - 1];
    for (let i = 0; i < prefixs.length; i++) {
        sum -= nums[i];
        if (prefixs[i] === sum) {
            return i;
        }
    }
    return -1;
};
