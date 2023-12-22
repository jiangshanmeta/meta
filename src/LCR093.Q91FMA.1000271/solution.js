/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {
    const valueIndexMap = {};
    for (let i = 0; i < A.length; i++) {
        valueIndexMap[A[i]] = i;
    }
    const longest = {};
    const N = A.length;
    let result = 0;
    for (let k = 1; k < N; k++) {
        for (let j = 0; j < k; j++) {
            const i = valueIndexMap[A[k] - A[j]];
            if (i !== undefined && i < j) {
                const length = (longest[i * N + j] || 2) + 1;
                longest[j * N + k] = length;
                result = Math.max(result, length);
            }
        }
    }

    return result;
};
