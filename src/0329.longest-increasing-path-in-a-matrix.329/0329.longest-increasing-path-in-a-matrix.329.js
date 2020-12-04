/**
 * @param {number[][]} matrix
 * @return {number}
 */
// 就是DFS
function dfs (x, y, matrix, counts) {
    if (counts[x][y] !== 0) {
        return counts[x][y];
    }
    let subCount = 0;
    if (x > 0 && matrix[x - 1][y] < matrix[x][y]) {
        subCount = Math.max(subCount, dfs(x - 1, y, matrix, counts));
    }
    if (y > 0 && matrix[x][y - 1] < matrix[x][y]) {
        subCount = Math.max(subCount, dfs(x, y - 1, matrix, counts));
    }
    if (x < matrix.length - 1 && matrix[x + 1][y] < matrix[x][y]) {
        subCount = Math.max(subCount, dfs(x + 1, y, matrix, counts));
    }
    if (y < matrix[0].length - 1 && matrix[x][y + 1] < matrix[x][y]) {
        subCount = Math.max(subCount, dfs(x, y + 1, matrix, counts));
    }
    counts[x][y] = subCount + 1;
    return counts[x][y];
}

var longestIncreasingPath = function (matrix) {
    if (matrix.length === 0) {
        return 0;
    }
    const counts = new Array(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        counts[i] = new Array(matrix[0].length).fill(0);
    }
    let result = 1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result = Math.max(result, dfs(i, j, matrix, counts));
        }
    }

    return result;
};
