/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    const sumMatrix = new Array(M + 1);
    sumMatrix[0] = new Array(N + 1).fill(0);
    const vertical = new Array(N).fill(0);
    for (let i = 0; i < M; i++) {
        const row = new Array(N + 1);
        row[0] = 0;
        let rowSum = 0;
        for (let j = 0; j < N; j++) {
            row[j + 1] = sumMatrix[i][j] + rowSum + vertical[j] + matrix[i][j];
            rowSum += matrix[i][j];
            vertical[j] += matrix[i][j];
        }
        sumMatrix[i + 1] = row;
    }
    this.matrix = sumMatrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    const matrix = this.matrix;
    return matrix[row2 + 1][col2 + 1] + matrix[row1][col1] - matrix[row2 + 1][col1] - matrix[row1][col2 + 1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
