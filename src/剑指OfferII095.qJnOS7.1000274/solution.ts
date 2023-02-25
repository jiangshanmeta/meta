function longestCommonSubsequence (text1: string, text2: string): number {
    let dp = new Array<number>(text2.length + 1).fill(0);
    for (let i = 0; i < text1.length; i++) {
        const nDp = new Array<number>(text2.length + 1).fill(0);
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                nDp[j + 1] = Math.max(dp[j] + 1, dp[j + 1], nDp[j]);
            } else {
                nDp[j + 1] = Math.max(nDp[j], dp[j + 1]);
            }
        }
        dp = nDp;
    }

    return dp[text2.length];
}
