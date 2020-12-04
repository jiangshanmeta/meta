/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
    const permutation = [];
    for (let i = 0; i < m; i++) {
        permutation.push(i + 1);
    }
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        const index = permutation.indexOf(queries[i]);
        result.push(index);
        permutation.splice(index, 1);
        permutation.unshift(queries[i]);
    }
    return result;
};
