function luckyNumbers (matrix: number[][]): number[] {
    const M = matrix.length;
    const N = matrix[0].length;
    const rowMins = new Array(M).fill(Infinity);
    const columnMax = new Array(N).fill(-Infinity);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            rowMins[i] = Math.min(rowMins[i], matrix[i][j]);
            columnMax[j] = Math.max(columnMax[j], matrix[i][j]);
        }
    }
    const result:number[] = [];
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === rowMins[i] && matrix[i][j] === columnMax[j]) {
                result.push(matrix[i][j]);
            }
        }
    }
    return result;
}
