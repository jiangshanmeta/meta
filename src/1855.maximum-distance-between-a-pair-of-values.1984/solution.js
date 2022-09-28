/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let result = 0;
    while (i < nums1.length && j < nums2.length) {
        if (i > j) {
            j++;
            continue;
        }
        if (nums1[i] > nums2[j]) {
            i++;
            continue;
        }
        result = Math.max(result, j - i);
        j++;
    }
    return result;
};
