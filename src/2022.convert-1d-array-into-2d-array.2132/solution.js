/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (original.length !== m * n) {
        return [];
    }
    const result = new Array(m);
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n);
    }

    for (let i = 0; i < original.length; i++) {
        const y = i % n;
        const x = (i - y) / n;
        result[x][y] = original[i];
    }

    return result;
};
