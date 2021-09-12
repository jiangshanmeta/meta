/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let result = 0;
    const M = grid.length;
    const N = grid[0].length;
    const dfs = (x, y) => {
        if (x < 0 || y < 0 || x === M || y === N || grid[x][y] === 0) {
            return 0;
        }
        grid[x][y] = 0;
        return 1 + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1);
    };
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 0) {
                continue;
            }
            result = Math.max(result, dfs(i, j));
        }
    }
    return result;
};
