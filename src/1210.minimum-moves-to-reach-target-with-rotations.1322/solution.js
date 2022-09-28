/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
    const N = grid.length;
    const visited = {
        '0,0,0,1': true,
    };
    const queue = [
        [
            0, 0, 0, 1, 0, ], ];
    while (queue.length) {
        let [
            x1, y1, x2, y2, move, ] = queue.shift();
        move++;

        if (x1 === x2) {
            // 当前是水平的

            // 尝试向右移动
            if (y2 < N - 1 && grid[x2][y2 + 1] === 0 && !visited[`${x2},${y2},${x2},${y2 + 1}`]) {
                if (isEnd(x2, y2, x2, y2 + 1, N)) {
                    return move;
                }
                queue.push([
                    x2, y2, x2, y2 + 1, move, ]);
                visited[`${x2},${y2},${x2},${y2 + 1}`] = true;
            }
            if (x1 < N - 1 && grid[x1 + 1][y1] === 0 && grid[x1 + 1][y2] === 0) {
                // 尝试向下移动
                if (!visited[`${x1 + 1},${y1},${x1 + 1},${y2}`]) {
                    if (isEnd(x1 + 1, y1, x1 + 1, y2, N)) {
                        return move;
                    }

                    queue.push([
                        x1 + 1, y1, x1 + 1, y2, move, ]);
                    visited[`${x1 + 1},${y1},${x1 + 1},${y2}`] = true;
                }
                // 尝试顺时针旋转
                if (!visited[`${x1},${y1},${x1 + 1},${y1}`]) {
                    if (isEnd(x1, y1, x1 + 1, y1, N)) {
                        return move;
                    }

                    queue.push([
                        x1, y1, x1 + 1, y1, move, ]);
                    visited[`${x1},${y1},${x1 + 1},${y1}`] = true;
                }
            }
        } else {
            // 当前是垂直的
            // 尝试向下移动
            if (x2 < N - 1 && grid[x2 + 1][y2] === 0 && !visited[`${x2},${y2},${x2 + 1},${y2}`]) {
                if (isEnd(x2, y2, x2 + 1, y2, N)) {
                    return move;
                }
                queue.push([
                    x2, y2, x2 + 1, y2, move, ]);
                visited[`${x2},${y2},${x2 + 1},${y2}`] = true;
            }
            if (y2 < N - 1 && grid[x1][y2 + 1] === 0 && grid[x2][y2 + 1] === 0) {
                // 尝试向右移动
                if (!visited[`${x1},${y2 + 1},${x2},${y2 + 1}`]) {
                    if (isEnd(x1, y2 + 1, x2, y2 + 1, N)) {
                        return move;
                    }
                    queue.push([
                        x1, y2 + 1, x2, y2 + 1, move, ]);
                    visited[`${x1},${y2 + 1},${x2},${y2 + 1}`] = true;
                }
                // 尝试逆时针旋转
                if (!visited[`${x1},${y1},${x1},${y1 + 1}`]) {
                    if (isEnd(x1, y1, x1, y1 + 1, N)) {
                        return move;
                    }
                    queue.push([
                        x1, y1, x1, y1 + 1, move, ]);
                    visited[`${x1},${y1},${x1},${y1 + 1}`] = true;
                }
            }
        }
    }
    return -1;
};

function isEnd (x1, y1, x2, y2, N) {
    return x1 === N - 1 && x2 === N - 1 && y1 === N - 2 && y2 === N - 1;
}
