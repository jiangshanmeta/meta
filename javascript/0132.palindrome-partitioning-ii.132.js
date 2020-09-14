/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    // 辅助数组 isPalindrome[i][j] s[i...j] 是否是回文
    // 这其实也是个dp
    const isPalindrome = new Array(s.length);
    for (let i = s.length - 1; i > -1; i--) {
        isPalindrome[i] = new Array(s.length).fill(true);
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                isPalindrome[i][j] = isPalindrome[i + 1][j - 1];
            } else {
                isPalindrome[i][j] = false;
            }
        }
    }
    // dp[i] s[0...i] 最少需要几次cut
    const dp = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        if (isPalindrome[0][i]) {
            dp[i] = 0;
        } else {
            dp[i] = i;
            // 分为两部分[0,j] [j+1,i]
            // [0,j] 对应dp[j]
            // [j+1,i]不分割 看是否是回文
            for (let j = 0; j < i; j++) {
                if (isPalindrome[j + 1][i]) {
                    dp[i] = Math.min(dp[j] + 1, dp[i]);
                }
            }
        }
    }

    return dp[s.length - 1];
};
