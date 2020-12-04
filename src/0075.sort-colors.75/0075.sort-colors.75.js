/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let zeroEndIndex = -1;
    let twoStartIndex = nums.length;
    let index = 0;
    while (index < twoStartIndex) {
        // 如果是2 和后面的元素交换
        if (nums[index] === 2) {
            nums[index] = nums[--twoStartIndex];
            nums[twoStartIndex] = 2;
            continue;
        }
        // 是0 0的结束位置+1
        if (nums[index] === 0) {
            nums[++zeroEndIndex] = 0;
            // 0的位置+1可能会导致1的位置后移一位
            if (index !== zeroEndIndex) {
                nums[index] = 1;
            }
        }
        // 1的情况 直接向后看
        index++;
    }
};
