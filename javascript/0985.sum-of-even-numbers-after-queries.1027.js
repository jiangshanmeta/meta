/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    const result = new Array(queries.length);
    A[queries[0][1]] += queries[0][0];

    result[0] = A.reduce((sum, item) => {
        if (item % 2 === 0) {
            sum += item;
        }
        return sum;
    }, 0);

    for (let i = 1; i < queries.length; i++) {
        const index = queries[i][1];
        const val = queries[i][0];
        const isEven = val % 2 === 0;
        const isOldEven = A[index] % 2 === 0;
        if (isOldEven) {
            if (isEven) {
                result[i] = result[i - 1] + val;
            } else {
                result[i] = result[i - 1] - A[index];
            }
        } else {
            if (isEven) {
                result[i] = result[i - 1];
            } else {
                result[i] = result[i - 1] + val + A[index];
            }
        }

        A[index] += val;
    }

    return result;
};
