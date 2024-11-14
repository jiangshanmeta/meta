class NumMatrix {
    private sumMatrix:number[][];
    constructor (matrix: number[][]) {
        const M = matrix.length;
        const N = matrix[0].length;
        const sumMatrix = new Array(M + 1);
        sumMatrix[0] = new Array<number>(N + 1).fill(0);
        const vertical = new Array<number>(N).fill(0);
        for (let i = 0; i < M; i++) {
            const row = new Array<number>(N + 1);
            row[0] = 0;
            let rowSum = 0;
            for (let j = 0; j < N; j++) {
                row[j + 1] = rowSum + sumMatrix[i][j] + vertical[j] + matrix[i][j];
                rowSum += matrix[i][j];
                vertical[j] += matrix[i][j];
            }
            sumMatrix[i + 1] = row;
        }
        this.sumMatrix = sumMatrix;
    }

    sumRegion (row1: number, col1: number, row2: number, col2: number): number {
        const sumMatrix = this.sumMatrix;
        return sumMatrix[row2 + 1][col2 + 1] + sumMatrix[row1][col1] - sumMatrix[row2 + 1][col1] - sumMatrix[row1][col2 + 1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
