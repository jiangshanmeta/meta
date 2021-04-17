function minDistance (word1: string, word2: string): number {
    const M = word2.length + 1;
    const N = word1.length + 1;
    let dp:number[] = new Array(N);
    for (let j = 0; j < N; j++) {
        dp[j] = j;
    }

    for (let i = 1; i < M; i++) {
        const nDp:number[] = new Array(N);
        nDp[0] = i;
        for (let j = 1; j < N; j++) {
            nDp[j] = Math.min(
                dp[j - 1] + (word1[j - 1] === word2[i - 1] ? 0 : 1),
                nDp[j - 1] + 1,
                dp[j] + 1
            );
        }

        dp = nDp;
    }
    return dp[dp.length - 1];
}
