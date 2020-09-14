/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // minVal表示遇见过的最小值
    // doupletMinVal表示遇到过的增长的douplet(从triplet衍生出来的词)子序列 第二个值的最小值
    let doupletMinVal = Infinity;
    let minVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > doupletMinVal) {
            return true;
        }
        if (nums[i] > minVal && nums[i] < doupletMinVal) {
            doupletMinVal = nums[i];
        }
        if (nums[i] < minVal) {
            minVal = nums[i];
        }
    }
    return false;
};
