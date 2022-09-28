/**
 * @param {number[]} nums
 * @return {number}
 */
// 类似于leetcode 41
var arrayNesting = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        // 一组nest元素 调整到应有的位置
        while (nums[i] !== i) {
            const tmp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = tmp;
            count++;
        }
        result = Math.max(result, count);
    }
    return result;
};
