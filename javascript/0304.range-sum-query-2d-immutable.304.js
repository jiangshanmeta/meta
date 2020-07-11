/**
 * @param {number[][]} matrix
 */
// 二位版本的 leetcode 303
var NumMatrix = function(matrix) {
    // 从左上角开始到(i,j)的所有元素的和存放在sumMatrix[i+1][j+1]中
    const sumMatrix = new Array(matrix.length+1);
    const W = (matrix[0] && matrix[0].length) || 0;
    for(let i=0;i<sumMatrix.length;i++){
        sumMatrix[i] = new Array(W+1).fill(0);
    }
    const rowSum = new Array(W).fill(0);
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<W+1;j++){
            rowSum[j] += matrix[i][j];
            sumMatrix[i+1][j+1] = sumMatrix[i+1][j]+rowSum[j];
        }
    }

    this.sumMatrix = sumMatrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const matrix = this.sumMatrix;
    return matrix[row2+1][col2+1]-matrix[row2+1][col1]-matrix[row1][col2+1]+matrix[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */