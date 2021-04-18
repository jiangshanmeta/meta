/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    const copy = [...nums, ].sort((a, b) => a - b);
    let left = 0;
    let right = copy.length - 1;
    let i = 0;
    while (left < right) {
        nums[i++] = copy[left++];
        nums[i++] = copy[right--];
    }
    if (left === right) {
        nums[i] = copy[left];
    }
};
