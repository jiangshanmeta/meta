/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // left 左侧增长序列最大值
    // right 右侧增长序列最小值
    let left = 0;
    let right = nums.length - 1;
    while (nums[left] >= nums[right]) {
        if (left + 1 === right) {
            return nums[right];
        }
        const mid = (left + right) >> 1;
        // 三个相等 只能遍历找了
        if (nums[left] === nums[right] && nums[left] === nums[mid]) {
            let minVal = nums[left];
            for (let i = left + 1; i < right + 1; i++) {
                if (nums[i] < minVal) {
                    minVal = nums[i];
                }
            }
            return minVal;
        }

        if (nums[mid] >= nums[left]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    // 旋转后是原序列的情况
    return nums[0];
};
