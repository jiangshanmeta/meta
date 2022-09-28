/**
 * @param {number[]} nums
 */
// 用303的方法暂且解了
var NumArray = function (nums) {
    this.nums = nums;
    const sum = new Array(nums.length);
    sum[0] = 0;
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        sum[i + 1] = curSum;
    }
    this.sum = sum;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
    const delta = val - this.nums[i];
    this.nums[i] = val;
    if (delta) {
        while (i < this.nums.length) {
            this.sum[++i] += delta;
        }
    }
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
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
