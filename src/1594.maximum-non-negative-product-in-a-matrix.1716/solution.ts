function maxProductPath (grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;
    const dp = new Array<number[]>(N);
    dp[0] = [grid[0][0], grid[0][0], ];
    for (let j = 1; j < N; j++) {
        const n = dp[j - 1][0] * grid[0][j];
        dp[j] = [n, n, ];
    }
    for (let i = 1; i < M; i++) {
        dp[0][0] *= grid[i][0];
        dp[0][1] = dp[0][0];
        for (let j = 1; j < N; j++) {
            const a = dp[j - 1][0] * grid[i][j];
            const b = dp[j - 1][1] * grid[i][j];
            const c = dp[j][0] * grid[i][j];
            const d = dp[j][1] * grid[i][j];
            dp[j] = [
                Math.min(a, b, c, d),
                Math.max(a, b, c, d),
            ];
        }
    }
    return dp[N - 1][1] < 0 ? -1 : dp[N - 1][1] % (10 ** 9 + 7);
}
