/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
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
    const dp = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        if (isPalindrome[0][i]) {
            dp[i] = 0;
        } else {
            dp[i] = i;
            for (let j = 0; j < i; j++) {
                if (isPalindrome[j + 1][i]) {
                    dp[i] = Math.min(dp[j] + 1, dp[i]);
                }
            }
        }
    }

    return dp[s.length - 1];
};
