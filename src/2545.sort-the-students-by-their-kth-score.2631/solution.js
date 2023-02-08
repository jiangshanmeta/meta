/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
    return score.sort((a, b) => b[k] - a[k]);
};
