/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    // 62 unique path的变形
    const row = obstacleGrid.length;
    const column = obstacleGrid[0].length;
    const dp = new Array(column).fill(1);
    const index = obstacleGrid[0].indexOf(1);
    if (index > -1) {
        for (let i = index; i < column; i++) {
            dp[i] = 0;
        }
    }

    for (let i = 1; i < row; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[0] = 0;
        }
        for (let j = 1; j < column; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            } else {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[column - 1];
};
