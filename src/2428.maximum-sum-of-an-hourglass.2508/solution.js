/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    let result = 0;
    for (let i = 1; i < M - 1; i++) {
        for (let j = 1; j < N - 1; j++) {
            const sum = grid[i][j] + grid[i - 1][j - 1] + grid[i - 1][j] + grid[i - 1][j + 1] + grid[i + 1][j - 1] + grid[i + 1][j] + grid[i + 1][j + 1];
            result = Math.max(result, sum);
        }
    }
    return result;
};
