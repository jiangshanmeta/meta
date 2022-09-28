/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let isFirstColumn = false;
    const row = matrix.length;
    const column = matrix[0].length;

    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) {
            isFirstColumn = true;
        }
        for (let j = 1; j < column; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let j = 1; j < column; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < row; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < column; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    if (isFirstColumn) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }
};
