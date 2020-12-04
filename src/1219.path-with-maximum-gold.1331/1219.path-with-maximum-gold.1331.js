/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    const visited = new Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = new Array(N).fill(false);
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            result = Math.max(result, backTracking(grid, i, j, visited, 0));
        }
    }
    return result;
};

function backTracking (grid, x, y, visited, gold) {
    if (x < 0 || y < 0 || x === grid.length || y === grid[0].length || grid[x][y] === 0 || visited[x][y]) {
        return gold;
    }
    gold += grid[x][y];
    visited[x][y] = true;
    let result = 0;
    for (let i = -1; i < 2; i++) {
        result = Math.max(result, backTracking(grid, x + i, y, visited, gold));
    }
    for (let j = -1; j < 2; j++) {
        result = Math.max(result, backTracking(grid, x, y + j, visited, gold));
    }

    visited[x][y] = false;
    return result;
}
