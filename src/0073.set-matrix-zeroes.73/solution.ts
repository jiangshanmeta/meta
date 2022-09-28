/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes (matrix: number[][]): void {
    const M = matrix.length;
    if (M === 0) {
        return;
    }
    const N = matrix[0].length;
    const horizontal:boolean[] = new Array(N).fill(false);
    const vertical:boolean[] = new Array(M).fill(false);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            horizontal[j] = horizontal[j] || matrix[i][j] === 0;
            vertical[i] = vertical[i] || matrix[i][j] === 0;
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
