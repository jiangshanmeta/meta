/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const M = matrix.length;
    if (M === 0) {
        return;
    }
    const N = matrix[0].length;
    const vertical = new Array(M);
    const horizontal = new Array(N);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === 0) {
                vertical[i] = true;
                horizontal[j] = true;
            }
        }
    }
    for (let i = 0; i < M; i++) {
        if (vertical[i]) {
            for (let j = 0; j < N; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    for (let j = 0; j < N; j++) {
        if (horizontal[j]) {
            for (let i = 0; i < M; i++) {
                matrix[i][j] = 0;
            }
        }
    }
};
