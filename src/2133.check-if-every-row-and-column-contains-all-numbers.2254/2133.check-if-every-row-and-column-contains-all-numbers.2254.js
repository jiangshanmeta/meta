/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    const N = matrix.length;
    for (let i = 0; i < N; i++) {
        const set = new Set();
        for (let j = 0; j < N; j++) {
            set.add(matrix[i][j]);
        }
        if (set.size !== N) {
            return false;
        }
    }
    for (let j = 0; j < N; j++) {
        const set = new Set();
        for (let i = 0; i < N; i++) {
            set.add(matrix[i][j]);
        }
        if (set.size !== N) {
            return false;
        }
    }

    return true;
};
