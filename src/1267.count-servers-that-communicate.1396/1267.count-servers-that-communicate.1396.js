/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rows = new Array(m).fill(0);
    const columns = new Array(n).fill(0);
    // 先统计每一行每一列总共有多少个
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rows[i]++;
                columns[j]++;
            }
        }
    }
    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 只有所在行或者列不止一个的时候才满足
            if (grid[i][j] === 1 && (rows[i] > 1 || columns[j] > 1)) {
                result++;
            }
        }
    }
    return result;
};
