/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    const copy = [...nums, ].sort((a, b) => b - a);
    let left = 0;
    let right = nums.length - 1;
    let index = 0;
    while (index < nums.length) {
        nums[index++] = copy[left++];
        if (index < nums.length) {
            nums[index++] = copy[right--];
        }
    }
};
