function minPathSum (grid: number[][]): number {
    const M = grid.length;
    if (M === 0) {
        return 0;
    }
    const N = grid[0].length;
    const dp:number[] = new Array(N);
    dp[0] = grid[0][0];
    for (let j = 1; j < N; j++) {
        dp[j] = dp[j - 1] + grid[0][j];
    }
    for (let i = 1; i < M; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < N; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
        }
    }
    return dp[N - 1];
}
