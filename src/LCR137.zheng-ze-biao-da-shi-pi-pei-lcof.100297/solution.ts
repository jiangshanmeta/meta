function isMatch (s: string, p: string): boolean {
    const M = p.length + 1;
    const N = s.length + 1;
    let dp:boolean[] = new Array(N).fill(false);
    dp[0] = true;
    for (let i = 1; i < M; i++) {
        if (p[i - 1] === '*') {
            continue;
        }
        const char = p[i - 1];
        const nextIsStar = i < p.length && p[i] === '*';
        const nDp:boolean[] = new Array(N).fill(false);
        if (nextIsStar) {
            nDp[0] = dp[0];
        }

        for (let j = 1; j < N; j++) {
            if (nextIsStar) {
                if (char === '.') {
                    nDp[j] = dp[j];
                    let index = j;
                    while (!nDp[j] && index > 0) {
                        nDp[j] = dp[--index];
                    }
                } else {
                    nDp[j] = dp[j];
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
}
