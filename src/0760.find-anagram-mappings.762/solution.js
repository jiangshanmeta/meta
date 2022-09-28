/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function (A, B) {
    const map = {};
    for (let i = 0; i < B.length; i++) {
        if (!map[B[i]]) {
            map[B[i]] = [];
        }
        map[B[i]].push(i);
    }
    const result = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
        result[i] = map[A[i]].pop();
    }

    return result;
};
