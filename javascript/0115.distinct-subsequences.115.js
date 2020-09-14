/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    // dp[i][j] s取前i个 j取前j个 对应的distict num
    // dp[i][j] = dp[i-1][j] ( s[i-1] !== t[j-1] ) (两个不相等 只能干掉s[i-1]了)
    // dp[i][j] = dp[i-1][j-1] + dp[i-1][j] ( s[i-1] === t[j-1] ) ( 可以不干掉s[i-1] 当然也可以干掉)
    // dp[i][0] = 1
    const dp = new Array(t.length + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= s.length; i++) {
        for (let j = i; j > 0; j--) {
            if (s[i - 1] === t[j - 1]) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[t.length];
};
