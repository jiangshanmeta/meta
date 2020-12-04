/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// BFS
var updateMatrix = function (matrix) {
    const queue = [];
    const result = [];
    const row = matrix.length;
    const column = matrix[0].length;
    for (let i = 0; i < row; i++) {
        const rowArr = new Array(column);
        for (let j = 0; j < column; j++) {
            if (matrix[i][j] === 0) {
                rowArr[j] = 0;
                queue.push([
                    i, j, ]);
            } else {
                rowArr[j] = Infinity;
            }
        }
        result[i] = rowArr;
    }
    while (queue.length) {
        const [
            x, y, ] = queue.shift();
        const newDis = result[x][y] + 1;
        if (x > 0 && newDis < result[x - 1][y]) {
            result[x - 1][y] = newDis;
            queue.push([
                x - 1, y, ]);
        }
        if (y < column - 1 && newDis < result[x][y + 1]) {
            result[x][y + 1] = newDis;
            queue.push([
                x, y + 1, ]);
        }
        if (x < row - 1 && newDis < result[x + 1][y]) {
            result[x + 1][y] = newDis;
            queue.push([
                x + 1, y, ]);
        }
        if (y > 0 && newDis < result[x][y - 1]) {
            result[x][y - 1] = newDis;
            queue.push([
                x, y - 1, ]);
        }
    }

    return result;
};
