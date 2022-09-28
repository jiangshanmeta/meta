/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const M = p.length + 1;
    const N = s.length + 1;
    let dp = new Array(N).fill(false);
    dp[0] = true;
    for (let i = 1; i < M; i++) {
        if (p[i - 1] === '*') {
            continue;
        }
        const char = p[i - 1];
        const nextIsStar = i < p.length && p[i] === '*';
        const nDp = new Array(N).fill(false);
        if (nextIsStar) {
            // 处理匹配0个的情况
            nDp[0] = dp[0];
        }
        for (let j = 1; j < N; j++) {
            if (nextIsStar) {
                // 匹配0个
                nDp[j] = dp[j];
                if (char === '.') {
                    let index = j;
                    while (!nDp[j] && index > 0) {
                        nDp[j] = dp[--index];
                    }
                } else {
                    let index = j;
                    while (!nDp[j] && index > 0 && s[index - 1] === char) {
                        nDp[j] = dp[--index];
                    }
                }
            } else {
                if (char === '.') {
                    nDp[j] = dp[j - 1];
                } else if (s[j - 1] === char) {
                    nDp[j] = dp[j - 1];
                }
            }
        }
        dp = nDp;
    }
    return dp[dp.length - 1];
};
