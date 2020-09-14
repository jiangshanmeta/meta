/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // 很像 62 unique path
    const dp = grid[0];
    const column = dp.length;
    for (let i = 1; i < column; i++) {
        dp[i] += dp[i - 1];
    }

    for (let i = 1; i < grid.length; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < column; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
        }
    }

    return dp[column - 1];
};
