/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
    const datas = [];
    const indexs = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        }
        datas.push(nums[i]);
        indexs.push(i);
    }
    this.datas = datas;
    this.indexs = indexs;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
    let i = 0;
    let j = 0;
    const datas1 = this.datas;
    const datas2 = vec.datas;
    const indexs1 = this.indexs;
    const indexs2 = vec.indexs;
    let result = 0;
    while (i < datas1.length && j < datas2.length) {
        if (indexs1[i] < indexs2[j]) {
            i++;
        } else if (indexs1[i] > indexs2[j]) {
            j++;
        } else {
            result += datas1[i++] * datas2[j++];
        }
    }

    return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
