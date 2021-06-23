/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
    this.map2 = nums2.reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, Object.create(null));
    this.nums1 = nums1;
    this.nums2 = nums2;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
    this.map2[this.nums2[index]]--;
    this.nums2[index] += val;
    const num = this.nums2[index];
    this.map2[num] = (this.map2[num] || 0) + 1;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
    let result = 0;
    for (const item of this.nums1) {
        if (this.map2[tot - item]) {
            result += this.map2[tot - item];
        }
    }
    return result;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
