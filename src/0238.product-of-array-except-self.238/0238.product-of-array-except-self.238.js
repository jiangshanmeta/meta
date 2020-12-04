/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 这题的难点在于不用除法
    // 对于第i个节点 对应结果是 前i-1个节点的积 * 后面节点的积
    const result = new Array(nums.length).fill(1);
    // 这个循环找到前i-1个节点的积
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // right对应后面节点的积
    let right = 1;
    for (let i = nums.length - 1; i > -1; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};
