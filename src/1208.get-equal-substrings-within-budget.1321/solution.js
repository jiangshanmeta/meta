/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
// 滑动窗口
var equalSubstring = function (s, t, maxCost) {
    // 按照题意计算费用
    const costs = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        costs[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    let maxLength = 0;
    let curLength = 0;
    let curCost = 0;
    let index = 0;
    while (index < s.length) {
        // 添加新元素
        curCost += costs[index];
        curLength++;
        // 添加新元素使得总费用超了，干掉窗口开始的元素
        if (curCost > maxCost) {
            while (curCost > maxCost && curLength > 0) {
                curLength--;
                curCost -= costs[index - curLength];
            }
        }
        maxLength = Math.max(maxLength, curLength);
        index++;
    }

    return maxLength;
};
