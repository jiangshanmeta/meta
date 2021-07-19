function maxPoints (points: number[][]): number {
    const M = points.length;
    const N = points[0].length;
    let dp = points[0];
    for (let i = 1; i < M; i++) {
        const nDp = new Array(N);
        let prefixMax = -Infinity;
        for (let j = 0; j < N; j++) {
            nDp[j] = Math.max(prefixMax, dp[j]);
            prefixMax = Math.max(prefixMax - 1, dp[j] - 1);
        }
        let suffixMax = -Infinity;
        for (let j = N - 1; j > -1; j--) {
            nDp[j] = Math.max(suffixMax, dp[j], nDp[j]) + points[i][j];
            suffixMax = Math.max(suffixMax - 1, dp[j] - 1);
        }
        dp = nDp;
    }
    return Math.max(...dp);
}
