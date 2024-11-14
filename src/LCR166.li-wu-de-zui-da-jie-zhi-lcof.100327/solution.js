/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    const dp = new Array(N).fill(0);
    for (let i = 0; i < M; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < N; j++) {
            dp[j] = Math.max(dp[j - 1], dp[j]) + grid[i][j];
        }
    }
    return dp[N - 1];
};
