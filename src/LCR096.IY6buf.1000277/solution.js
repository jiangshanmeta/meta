/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    const L1 = s1.length;
    const L2 = s2.length;
    const dp = [];
    for (let i = 0; i < L2 + 1; i++) {
        dp.push(new Array(L1 + 1).fill(false));
    }
    dp[0][0] = true;
    for (let i = 0; i < L2 + 1; i++) {
        for (let j = 0; j < L1 + 1; j++) {
            if (i > 0 && dp[i - 1][j] && s2[i - 1] === s3[i + j - 1]) {
                dp[i][j] = true;
            }
            if (j > 0 && dp[i][j - 1] && s1[j - 1] === s3[i + j - 1]) {
                dp[i][j] = true;
            }
        }
    }

    return dp[L2][L1];
};
