/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    // 先按照对角线顺序遍历一遍
    const M = mat.length;
    const N = mat[0].length;
    for (let index = 0; index < N; index++) {
        const sequence = [];
        let i = 0;
        let j = index;
        while (i < M && j < N) {
            sequence.push(mat[i++][j++]);
        }
        sequence.sort((a, b) => a - b);
        for (let k = 0; k < sequence.length; k++) {
            mat[k][index + k] = sequence[k];
        }
    }
    for (let index = 1; index < M; index++) {
        const sequence = [];
        let i = index;
        let j = 0;
        while (i < M && j < N) {
            sequence.push(mat[i++][j++]);
        }
        sequence.sort((a, b) => a - b);
        for (let k = 0; k < sequence.length; k++) {
            mat[index + k][k] = sequence[k];
        }
    }
    return mat;
};
