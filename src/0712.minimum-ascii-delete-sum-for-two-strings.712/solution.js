/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    // dp[i][j] 要删除的最小的ASCII和
    let dp = new Array(s2.length);
    dp[0] = 0;
    for (let i = 0; i < s2.length; i++) {
        dp[i + 1] = s2.charCodeAt(i) + dp[i];
    }
    for (let i = 1; i <= s1.length; i++) {
        const nextDp = new Array(s2.length + 1);
        nextDp[0] = s1.charCodeAt(i - 1) + dp[0];
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                nextDp[j] = dp[j - 1];
            } else {
                nextDp[j] = Math.min(
                    nextDp[j - 1] + s2.charCodeAt(j - 1),
                    dp[j] + s1.charCodeAt(i - 1)
                );
            }
        }
        dp = nextDp;
    }

    return dp[s2.length];
};
