/**
 * @param {number[]} nums
 * @return {number}
 */
// 根据 leetcode 300 最大增长子序列 改的
var findNumberOfLIS = function (nums) {
    // counts数组的每个元素对应以该元素为结尾的LIS的数量
    const counts = new Array(nums.length).fill(1);
    // lengths数组每一个元素记录以该元素为结尾的LIS的长度
    const lengths = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (lengths[j] + 1 > lengths[i]) {
                    lengths[i] = lengths[j] + 1;
                    counts[i] = counts[j];
                } else if (lengths[j] + 1 === lengths[i]) {
                    counts[i] += counts[j];
                }
            }
        }
    }
    // 找到最大长度
    const maxLength = Math.max(...lengths);
    // 根据长度计算数量
    let result = 0;
    for (let i = 0; i < counts.length; i++) {
        if (lengths[i] === maxLength) {
            result += counts[i];
        }
    }

    return result;
};
