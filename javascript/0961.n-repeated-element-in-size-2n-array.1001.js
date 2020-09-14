/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    const half = A.length >> 1;
    const countBy = {};
    for (let i = 0; i < A.length; i++) {
        countBy[A[i]] = countBy[A[i]] === undefined ? 1 : countBy[A[i]] + 1;
        if (countBy[A[i]] === half) {
            return A[i];
        }
    }
};
