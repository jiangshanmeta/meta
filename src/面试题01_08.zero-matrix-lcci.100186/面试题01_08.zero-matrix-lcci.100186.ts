/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes (matrix: number[][]): void {
    const M = matrix.length;
    if (M === 0) {
        return;
    }
    const N = matrix[0].length;
    const vertical:boolean[] = new Array(M).fill(false);
    const horizontal:boolean[] = new Array(N).fill(false);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === 0) {
                vertical[i] = true;
                horizontal[j] = true;
            }
        }
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (vertical[i] || horizontal[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}
