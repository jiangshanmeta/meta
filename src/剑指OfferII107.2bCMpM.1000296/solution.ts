function updateMatrix (mat: number[][]): number[][] {
    const M = mat.length;
    const N = mat[0].length;
    const result = new Array<number[]>(M);
    for (let i = 0; i < M; i++) {
        result[i] = new Array(N).fill(Infinity);
    }
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0;
            }
        }
    }
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (i > 0) {
                result[i][j] = Math.min(result[i][j], result[i - 1][j] + 1);
            }
            if (j > 0) {
                result[i][j] = Math.min(result[i][j], result[i][j - 1] + 1);
            }
        }
    }

    for (let i = M - 1; i > -1; i--) {
        for (let j = N - 1; j > -1; j--) {
            if (i !== M - 1) {
                result[i][j] = Math.min(result[i][j], result[i + 1][j] + 1);
            }
            if (j !== N - 1) {
                result[i][j] = Math.min(result[i][j], result[i][j + 1] + 1);
            }
        }
    }

    return result;
}
