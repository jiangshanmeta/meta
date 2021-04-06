function isToeplitzMatrix (matrix: number[][]): boolean {
    const M = matrix.length;
    const N = matrix[0].length;
    for (let j = 0; j < N; j++) {
        const target = matrix[0][j];
        let x = 1;
        let y = j + 1;
        while (x < M && y < N) {
            if (matrix[x++][y++] !== target) {
                return false;
            }
        }
    }
    for (let i = 1; i < M; i++) {
        const target = matrix[i][0];
        let x = i + 1;
        let y = 1;
        while (x < M && y < N) {
            if (matrix[x++][y++] !== target) {
                return false;
            }
        }
    }
    return true;
}
