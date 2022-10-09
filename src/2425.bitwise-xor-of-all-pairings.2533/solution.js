/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    let result = 0;
    if (nums2.length % 2 === 1) {
        for (let i = 0; i < nums1.length; i++) {
            result ^= nums1[i];
        }
    }
    if (nums1.length % 2 === 1) {
        for (let i = 0; i < nums2.length; i++) {
            result ^= nums2[i];
        }
    }
    return result;
};
