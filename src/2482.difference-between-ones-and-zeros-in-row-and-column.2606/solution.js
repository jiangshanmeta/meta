/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    const M = grid.length;
    const N = grid[0].length;
    const rowZeros = new Array(M).fill(0);
    const colZeros = new Array(N).fill(0);
    const result = new Array(M);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 0) {
                rowZeros[i]++;
                colZeros[j]++;
            }
        }
    }

    for (let i = 0; i < M; i++) {
        const row = new Array(N);
        for (let j = 0; j < N; j++) {
            row[j] = N - rowZeros[i] * 2 + M - colZeros[j] * 2;
        }
        result[i] = row;
    }

    return result;
};
