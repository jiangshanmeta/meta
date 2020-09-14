/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set1 = {};
    nums1.forEach((num) => {
        set1[num] = true;
    });

    return nums2.reduce((arr, num) => {
        if (set1[num]) {
            arr.push(num);
            delete set1[num];
        }
        return arr;
    }, []);
};
