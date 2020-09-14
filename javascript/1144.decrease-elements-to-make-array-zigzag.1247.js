/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
    if (nums.length === 1) {
        return 0;
    }
    // 尝试奇数较小
    let count1 = 0;
    for (let i = 1; i < nums.length; i += 2) {
        const target = Math.min(
            nums[i - 1],
            i + 1 < nums.length ? nums[i + 1] : Infinity
        ) - 1;
        if (nums[i] > target) {
            count1 += nums[i] - target;
        }
    }
    // 尝试偶数较小
    let count2 = nums[0] < nums[1] ? 0 : nums[0] - nums[1] + 1;
    for (let i = 2; i < nums.length; i += 2) {
        const target = Math.min(
            nums[i - 1],
            i + 1 < nums.length ? nums[i + 1] : Infinity
        ) - 1;
        if (nums[i] > target) {
            count2 += (nums[i] - target);
        }
    }

    return Math.min(count1, count2);
};
