/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Moore Voting
var majorityElement = function (nums) {
    // 大于三分之一 最多有两个满足条件
    // m n 表示候选项
    let m, n;
    let mCount = 0;
    let nCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === m) {
            mCount++;
        } else if (nums[i] === n) {
            nCount++;
        } else if (mCount === 0) {
            m = nums[i];
            mCount = 1;
        } else if (nCount === 0) {
            n = nums[i];
            nCount = 1;
        } else {
            mCount--;
            nCount--;
        }
    }
    const oneThird = Math.floor(nums.length / 3);
    mCount = 0;
    nCount = 0;
    // 需要校验一遍是否满足条件
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === m) {
            mCount++;
        } else if (nums[i] === n) {
            nCount++;
        }
    }
    const result = [];
    mCount > oneThird && result.push(m);
    nCount > oneThird && result.push(n);
    return result;
};
