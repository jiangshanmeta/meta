/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let rightIndex = nums.length - 1;

    while (rightIndex > -1) {
        const target = nums[rightIndex];
        let low = 0;
        let high = rightIndex;
        let leftIndex = rightIndex;
        // 二分查找target相同的元素的最小索引
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (nums[mid] === target) {
                leftIndex = Math.min(leftIndex, mid);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        rightIndex > leftIndex && nums.splice(leftIndex, rightIndex - leftIndex);
        rightIndex = leftIndex - 1;
    }
    return nums.length;
};
