/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const M = word2.length + 1;
    const N = word1.length + 1;
    let dp = new Array(N);
    for (let j = 0; j < N; j++) {
        dp[j] = j;
    }
    for (let i = 1; i < M; i++) {
        const nDp = new Array(N);
        nDp[0] = i;
        for (let j = 1; j < N; j++) {
            nDp[j] = Math.min(
                // 一样或者替换
                dp[j - 1] + (word1[j - 1] === word2[i - 1] ? 0 : 1),
                // 插入
                dp[j] + 1,
                // 删除
                nDp[j - 1] + 1
            );
        }
        dp = nDp;
    }

    return dp[dp.length - 1];
};
