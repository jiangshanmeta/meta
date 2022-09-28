/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    const dp = new Array(N);
    dp[0] = grid[0][0];
    for (let j = 1; j < N; j++) {
        dp[j] = grid[0][j] + dp[j - 1];
    }
    for (let i = 1; i < M; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < N; j++) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
        }
    }
    return dp[N - 1];
};
