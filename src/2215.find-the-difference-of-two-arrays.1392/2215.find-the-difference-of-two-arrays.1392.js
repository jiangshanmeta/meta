/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [
        [...new Set(nums1.filter(item => !set2.has(item))), ],
        [...new Set(nums2.filter(item => !set1.has(item))), ],
    ];
};
