/**
 * @param {number[]} nums
 * @return {number}
 */
// 最大子列和
var maxSubArray = function (nums) {
    let max = -Infinity;
    let cur = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (cur === -Infinity) {
            cur = nums[i];
        } else {
            cur += nums[i];
        }

        if (cur > max) {
            max = cur;
        }
        if (cur < 0) {
            cur = -Infinity;
        }
    }
    return max;
};
