/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.map = nums.reduce((map, item, index) => {
        (map[item] || (map[item] = [])).push(index);
        return map;
    }, {});
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    const indexs = this.map[target];

    return indexs[Math.floor(Math.random() * indexs.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
