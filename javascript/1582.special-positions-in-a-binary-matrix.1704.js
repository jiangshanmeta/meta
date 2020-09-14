/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    const M = mat.length;
    const N = mat[0].length;
    const horizontal = new Array(N).fill(0);
    const vertical = new Array(M).fill(0);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 1) {
                vertical[i]++;
                horizontal[j]++;
            }
        }
    }
    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 1 && horizontal[j] === 1 && vertical[i] === 1) {
                result++;
            }
        }
    }
    return result;
};
