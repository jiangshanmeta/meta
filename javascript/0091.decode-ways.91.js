/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    // dp[i] 长度为i的字串有几种decode方法
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i < dp.length; i++) {
        // 少一位的作为基础构成当前子串
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        // 少两位的作为基础构成当前字串 要大于9小于27
        if (i > 1 && s[i - 2] !== '0' && +s.substring(i - 2, i) < 27) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
};
