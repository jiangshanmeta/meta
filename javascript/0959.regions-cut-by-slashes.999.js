/**
 * @param {string[]} grid
 * @return {number}
 */
// DFS
var regionsBySlashes = function (grid) {
    // 0=>未探索 1=>已探索左侧 2=>已探索右侧 3=>全部探索完成
    const N = grid.length;
    const markGrid = [];
    for (let i = 0; i < N; i++) {
        markGrid[i] = new Array(N).fill(0);
    }
    // 进入方向 1=>从左侧 2=>从右侧 3=>从上面 4=>从下面
    function dfs (x, y, from) {
        if (x < 0 || x === N || y < 0 || y === N || markGrid[x][y] === 3) {
            return;
        }
        if (grid[x][y] === ' ') {
            markGrid[x][y] = 3;
            dfs(x - 1, y, 4);
            dfs(x + 1, y, 3);
            dfs(x, y - 1, 2);
            dfs(x, y + 1, 1);
        } else if (grid[x][y] === '/') {
            if (from === 1 || from === 3) {
                if (markGrid[x][y] === 1) {
                    return;
                }

                if (markGrid[x][y] === 2) {
                    markGrid[x][y] = 3;
                } else {
                    markGrid[x][y] = 1;
                }
                dfs(x - 1, y, 4);
                dfs(x, y - 1, 2);
            } else {
                if (markGrid[x][y] === 2) {
                    return;
                }

                if (markGrid[x][y] === 1) {
                    markGrid[x][y] = 3;
                } else {
                    markGrid[x][y] = 2;
                }
                dfs(x + 1, y, 3);
                dfs(x, y + 1, 1);
            }
        } else {
            if (from === 2 || from === 3) {
                if (markGrid[x][y] === 2) {
                    return;
                }
                if (markGrid[x][y] === 1) {
                    markGrid[x][y] = 3;
                } else {
                    markGrid[x][y] = 2;
                }
                dfs(x - 1, y, 4);
                dfs(x, y + 1, 1);
            } else {
                if (markGrid[x][y] === 1) {
                    return;
                }
                if (markGrid[x][y] === 2) {
                    markGrid[x][y] = 3;
                } else {
                    markGrid[x][y] = 1;
                }
                dfs(x, y - 1, 2);
                dfs(x + 1, y, 3);
            }
        }
    }

    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (markGrid[i][j] !== 3 && markGrid[i][j] !== 1) {
                dfs(i, j, 1);
                result++;
            }

            if (markGrid[i][j] !== 3 && markGrid[i][j] !== 2) {
                dfs(i, j, 2);
                result++;
            }
        }
    }

    return result;
};
