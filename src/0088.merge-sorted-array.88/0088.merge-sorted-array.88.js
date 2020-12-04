/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let finalIndex = m + n - 1;

    while (index1 > -1 && index2 > -1) {
        const val1 = nums1[index1];
        const val2 = nums2[index2];
        if (val1 < val2) {
            nums1[finalIndex--] = val2;
            index2--;
        } else if (val1 > val2) {
            nums1[finalIndex--] = val1;
            index1--;
        } else {
            nums1[finalIndex--] = val1;
            nums1[finalIndex--] = val1;
            index1--;
            index2--;
        }
    }

    while (index2 > -1) {
        nums1[finalIndex--] = nums2[index2--];
    }
};
