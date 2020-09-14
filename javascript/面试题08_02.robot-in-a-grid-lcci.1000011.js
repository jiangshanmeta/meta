/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function (obstacleGrid) {
    const M = obstacleGrid.length;
    const N = obstacleGrid[0].length;
    const dp = [];
    for (let i = 0; i < M; i++) {
        dp[i] = new Array(N).fill(false);
        if (obstacleGrid[i][0] === 0) {
            dp[i][0] = true;
            if (i > 0 && !dp[i - 1][0]) {
                dp[i][0] = false;
            }
        }
        for (let j = 1; j < N; j++) {
            if (obstacleGrid[i][j] === 1) {
                continue;
            }
            if (dp[i][j - 1] || (i > 0 && dp[i - 1][j])) {
                dp[i][j] = true;
            }
        }
    }
    if (!dp[M - 1][N - 1]) {
        return [];
    }
    const result = [];
    let i = M - 1;
    let j = N - 1;
    while (i > 0 || j > 0) {
        result.push([
            i, j, ]);
        if (i > 0 && dp[i - 1][j]) {
            i--;
        } else if (j > 0 && dp[i][j - 1]) {
            j--;
        }
    }
    result.push([
        0, 0, ]);
    result.reverse();
    return result;
};
