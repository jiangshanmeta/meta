/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const result = new Array(nums.length / 2);
    for (let i = 0; i < result.length; i++) {
        if (i & 1) {
            result[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        } else {
            result[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
        }
    }
    return minMaxGame(result);
};
