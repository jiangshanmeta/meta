/**
 * @param {number[][]} grid
 * @return {number}
 */
// 暴力算
var countNegatives = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] < 0) {
                result++;
            }
        }
    }
    return result;
};

// 基于杨氏矩阵+二分
var countNegatives = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    let result = 0;
    let row = 0;
    const column = 0;
    while (row < M && column < N) {
        if (grid[row][column] < 0) {
            result += (M - row) * (N - column);
            break;
        } else {
            result += countRow(grid[row], column + 1);
            row++;
        }
    }

    return result;
};

function countRow (row, low) {
    let startIndex = row.length;
    let high = row.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (row[mid] < 0) {
            startIndex = Math.min(startIndex, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return row.length - startIndex;
}
