/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // 二维dp dp[i][j] 表示text1采用长度为i的子串 text2采用长度为j的子串 的最长公共子序列
    let lastDp = new Array(text2.length + 1).fill(0);
    for (let i = 1; i < text1.length + 1; i++) {
        const dp = new Array(text2.length + 1).fill(0);
        for (let j = 1; j < text2.length + 1; j++) {
            // 对于(i,j) 如果text1[i-1] === text[j-1] 可由(i-1,j-1)衍生
            // 也可由(i,j-1)衍生 即j+1并不影响最长公共子序列
            // 也可由(i-1,j)衍生 即i+1并不影响最长公共子序列
            dp[j] = Math.max(
                text1[i - 1] === text2[j - 1] ? lastDp[j - 1] + 1 : 0,
                dp[j - 1],
                lastDp[j]
            );
        }
        lastDp = dp;
    }

    return lastDp[text2.length];
};
