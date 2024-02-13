function modifiedMatrix(matrix: number[][]): number[][] {
    const M = matrix.length;
    const N = matrix[0].length;
    const cols = new Array<number>(N).fill(-1);
    const result = new Array<number[]>(M);
    const points: number[][] = [];
    for (let i = 0; i < M; i++) {
        result[i] = new Array<number>(N);
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === -1) {
                points.push([i, j])
            } else {
                result[i][j] = matrix[i][j];
                cols[j] = Math.max(cols[j], matrix[i][j])
            }
        }
    }
    for (const [x, y] of points) {
        result[x][y] = cols[y];
    }
    return result
};