/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
// 矩阵 DFS
var colorBorder = function (grid, r0, c0, color) {
    const maxRow = grid.length - 1;
    const maxCol = grid[0].length - 1;
    const componentColor = grid[r0][c0];

    function isBorder (x, y) {
        if (x === 0 || y === 0 || x === maxRow || y === maxCol) {
            return true;
        }
        if (grid[x - 1][y] !== componentColor || grid[x][y - 1] !== componentColor || grid[x + 1][y] !== componentColor || grid[x][y + 1] !== componentColor) {
            return true;
        }
        return false;
    }
    const visited = {};
    visited[`${r0},${c0}`] = true;
    const border = [];

    function dfs (x, y) {
        if (isBorder(x, y)) {
            border.push(x, y);
        }
        if (x > 0 && !visited[`${x - 1},${y}`] && grid[x - 1][y] === componentColor) {
            visited[`${x - 1},${y}`] = true;
            dfs(x - 1, y);
        }
        if (y > 0 && !visited[`${x},${y - 1}`] && grid[x][y - 1] === componentColor) {
            visited[`${x},${y - 1}`] = true;
            dfs(x, y - 1);
        }
        if (x < maxRow && !visited[`${x + 1},${y}`] && grid[x + 1][y] === componentColor) {
            visited[`${x + 1},${y}`] = true;
            dfs(x + 1, y);
        }
        if (y < maxCol && !visited[`${x},${y + 1}`] && grid[x][y + 1] === componentColor) {
            visited[`${x},${y + 1}`] = true;
            dfs(x, y + 1);
        }
    }
    dfs(r0, c0);
    for (let i = 0; i < border.length; i += 2) {
        grid[border[i]][border[i + 1]] = color;
    }

    return grid;
};
