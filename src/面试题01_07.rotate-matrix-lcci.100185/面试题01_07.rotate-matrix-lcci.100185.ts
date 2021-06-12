/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate (matrix: number[][]): void {
    const n = matrix.length;
    if (n === 0) {
        return;
    }
    for (let layer = 0; layer < n / 2; layer++) {
        const first = layer;
        const last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
}
