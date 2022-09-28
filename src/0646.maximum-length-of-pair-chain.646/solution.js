/**
 * @param {number[][]} pairs
 * @return {number}
 */
// dp实现 类似于最长增长子序列(leetcode 300)
// 时间复杂度 O(N^2)
var findLongestChain = function (pairs) {
    // 按照end值排序
    pairs.sort((a, b) => a[1] - b[1]);
    const dp = new Array(pairs.length).fill(1);
    for (let i = 1; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    return Math.max(...dp);
};

/**
 * @param {number[][]} pairs
 * @return {number}
 */
// 贪心实现
// 时间复杂度 O(NlogN)
var findLongestChain = function (pairs) {
    // 按照end值从小到大排序
    pairs.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let minVal = -Infinity;
    // 从一个元素向后看 可以与多个节点构成chain
    // 我们选择end值最小的节点 这样可以链接更多的节点
    // 又由于已经按照end值排序 所以遇到的第一个能够成chain的节点 就是要连接的下一个节点
    for (let i = 0; i < pairs.length; i++) {
        if (minVal < pairs[i][0]) {
            minVal = pairs[i][1];
            count++;
        }
    }
    return count;
};
