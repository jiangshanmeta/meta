var findMin = function (nums) {
    // left 左侧增长序列的最大索引
    let left = 0;
    // right 右侧增长序列的最大索引
    let right = nums.length - 1;
    while (nums[left] > nums[right]) {
        if (left + 1 === right) {
            return nums[right];
        }
        const mid = (left + right) >> 1;
        if (nums[mid] > nums[left]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    // 考虑到可能旋转后是原数组，不会进入循环 最小的就是第0个
    return nums[0];
};
