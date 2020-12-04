/**
 * @param {number[]} A
 * @return {number}
 */
// 动态规划
var lenLongestFibSubseq = function (A) {
    const valueIndexMap = {};
    for (let i = 0; i < A.length; i++) {
        valueIndexMap[A[i]] = i;
    }
    const longest = {};
    const N = A.length;
    let result = 0;
    for (let k = 1; k < N; k++) {
        for (let j = 0; j < k; j++) {
            const i = valueIndexMap[A[k] - A[j]];
            // A[i]+A[j]<A[k] i<j<k
            if (i !== undefined && i < j) {
                // 前两个元素(i,j)以i*N+j的形式存放在longest中
                const length = (longest[i * N + j] || 2) + 1;
                longest[j * N + k] = length;
                result = Math.max(result, length);
            }
        }
    }

    return result;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {
    const dp = new Array(A.length);
    // dp[j][prev] 表示A[prev] A[j] 为最后两个元素的斐波那契数列有多长
    dp[0] = {};
    let result = 0;
    for (let i = 1; i < A.length; i++) {
        dp[i] = {};
        for (let j = 0; j < i; j++) {
            const prev = A[i] - A[j];
            dp[i][A[j]] = Math.max(dp[i][A[j]] || 0, dp[j][prev] ? dp[j][prev] + 1 : 2);
            result = Math.max(dp[i][A[j]], result);
        }
    }

    return result > 2 ? result : 0;
};
