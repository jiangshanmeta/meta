/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // rightIndex表示所能到大的最远位置
    let rightIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        // 该位置不可到达 以后的位置更不可到达
        if (i > rightIndex) {
            return false;
        }
        // 更新 rightIndex
        rightIndex = Math.max(rightIndex, i + nums[i]);
        // 已经能确定能到达了 就提前return
        if (rightIndex >= nums.length - 1) {
            return true;
        }
    }
};
