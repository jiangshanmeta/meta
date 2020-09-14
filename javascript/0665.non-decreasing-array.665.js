/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    // 标记是否已经更改
    let modified = false;
    let last = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // 当nums[i]比前一个小的时候
        // 可能改nums[i]也可能改num[i-1]
        // 决定于nums[i-2],nums[i]比nums[i-2]还小，只能改nums[i]了
        // 大于的情况，我们尽量保证已访问序列尽可能小
        // 所以改的是nums[i-1]
        if (nums[i] < last) {
            if (modified) {
                return false;
            }
            modified = true;
            if (i > 1 && nums[i - 2] > nums[i]) {
                continue;
            }
        }
        last = nums[i];
    }
    return true;
};
