/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
    const M = matrix.length;
    const N = matrix[0].length;
    const row = new Array(N).fill(0);
    const vertical = new Array(N).fill(0);
    const candidates = [];
    for (let i = 0; i < M; i++) {
        vertical[0] ^= matrix[i][0];
        row[0] = vertical[0];
        for (let j = 1; j < N; j++) {
            vertical[j] ^= matrix[i][j];
            row[j] = row[j - 1] ^ vertical[j];
        }
        candidates.push(...row);
    }

    return candidates.sort((a, b) => b - a)[k - 1];
};
