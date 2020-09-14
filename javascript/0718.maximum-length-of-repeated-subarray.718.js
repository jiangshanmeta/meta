/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    // dp[i][j] A[i-1] B[j-1]为结尾构成的重复子串的长度
    // dp[i][j] = dp[i-1][j-1]+1 if A[i-1] == B[j-1]
    // dp[i][j] = 0 if A[i-1] != B[j-1]
    // 压缩空间到O(N)
    const dp = new Array(B.length + 1).fill(0);
    let result = 0;
    for (let i = 1; i <= A.length; i++) {
        for (let j = B.length; j > 0; j--) {
            if (A[i - 1] === B[j - 1]) {
                dp[j] = dp[j - 1] + 1;
                result = Math.max(result, dp[j]);
            } else {
                dp[j] = 0;
            }
        }
    }
    return result;
};
