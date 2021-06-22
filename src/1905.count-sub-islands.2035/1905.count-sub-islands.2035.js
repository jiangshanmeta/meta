/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    const M = grid1.length;
    const N = grid1[0].length;
    const visited = new Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = new Array(N).fill(false);
    }
    let result = 0;
    const match = (x, y) => {
        if (x === -1 || y === -1 || x === M || y === N || visited[x][y] || grid2[x][y] === 0) {
            return true;
        }
        visited[x][y] = true;
        if (grid1[x][y] === 0) {
            return false;
        }
        return match(x, y - 1) && match(x, y + 1) && match(x + 1, y) && match(x - 1, y);
    };
    const floodFill = (x, y) => {
        if (x === -1 || y === -1 || x === M || y === N || grid2[x][y] === 0) {
            return;
        }
        grid2[x][y] = 0;
        floodFill(x - 1, y);
        floodFill(x + 1, y);
        floodFill(x, y - 1);
        floodFill(x, y + 1);
    };

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid1[i][j] && grid2[i][j]) {
                if (match(i, j)) {
                    result++;
                }
                floodFill(i, j);
            }
        }
    }

    return result;
};
