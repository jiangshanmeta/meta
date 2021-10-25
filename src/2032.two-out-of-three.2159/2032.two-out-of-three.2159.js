/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    const result = new Set();
    const set1 = new Set(nums1);
    for (let i = 0; i < nums2.length; i++) {
        if (set1.has(nums2[i])) {
            result.add(nums2[i]);
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        if (set1.has(nums3[i])) {
            result.add(nums3[i]);
        }
    }
    const set2 = new Set(nums2);
    for (let i = 0; i < nums3.length; i++) {
        if (set2.has(nums3[i])) {
            result.add(nums3[i]);
        }
    }
    return [...result, ];
};
