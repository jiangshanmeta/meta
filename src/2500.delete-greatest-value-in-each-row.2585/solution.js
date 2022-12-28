/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    for (const row of grid) {
        row.sort((a, b) => a - b);
    }
    let result = 0;
    for (let j = 0; j < N; j++) {
        let row = grid[0][j];
        for (let i = 1; i < M; i++) {
            row = Math.max(row, grid[i][j]);
        }
        result += row;
    }
    return result;
};
