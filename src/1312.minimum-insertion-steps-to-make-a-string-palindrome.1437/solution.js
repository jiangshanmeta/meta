/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    // dp[i][j] 对于s[i...j]最少需要插入几个
    const dp = new Array(s.length);
    for (let i = s.length - 1; i > -1; i--) {
        dp[i] = new Array(s.length).fill(0);
        dp[i][i] = 0;
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                // 左右两个相等 直接都干掉
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                // 左右两个不相等 可以尝试插入和最左侧一致的(在最右，把最左干掉) 或者最右侧一致的(在最左，把最右字符干掉)
                dp[i][j] = Math.min(
                    dp[i][j - 1],
                    dp[i + 1][j]
                ) + 1;
            }
        }
    }
    return dp[0][s.length - 1];
};
