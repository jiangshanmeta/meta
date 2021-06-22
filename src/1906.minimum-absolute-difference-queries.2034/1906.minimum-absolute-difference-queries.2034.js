/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
    const prefixCounts = new Array(101);
    // 借助差分数组处理
    for (let i = 1; i < 101; i++) {
        prefixCounts[i] = new Array(nums.length + 1).fill(0);
    }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        prefixCounts[num][i + 1] = 1;
    }
    // 构造前缀数组
    for (let i = 1; i < 101; i++) {
        for (let j = 1; j < nums.length + 1; j++) {
            prefixCounts[i][j] += prefixCounts[i][j - 1];
        }
    }
    // prefixCounts[i][j+1] 数字i在nums中j位出现次数
    const result = [];
    for (const [l, r, ] of queries) {
        let lastNum = 0;
        let minDiff = Infinity;
        for (let i = 1; i < 101; i++) {
            const count = prefixCounts[i][r + 1] - prefixCounts[i][l];
            if (count === 0) {
                continue;
            }
            if (lastNum === 0) {
                lastNum = i;
                continue;
            }
            minDiff = Math.min(minDiff, i - lastNum);
            lastNum = i;
        }
        result.push(minDiff === Infinity ? -1 : minDiff);
    }

    return result;
};
