function diagonalSum (mat: number[][]): number {
    const M = mat.length;
    let result = 0;
    for (let i = 0; i < M; i++) {
        result += mat[i][i];
        result += mat[i][M - i - 1];
    }
    if (M & 1) {
        const half = M >> 1;
        result -= mat[half][half];
    }
    return result;
}
