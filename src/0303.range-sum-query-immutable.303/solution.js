/**
 * @param {number[]} nums
 */
// 比较笨的发是dp二位数组 一个start一个end都算出来
// 要求[i,j] 和 可以 [0,j]-[0,i-1]
var NumArray = function (nums) {
    const sum = new Array(nums.length + 1);
    sum[0] = 0;
    // sum[k+1] 表示 [0,k]的和
    for (let i = 0; i < nums.length; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }
    this.sum = sum;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.sum[j + 1] - this.sum[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
