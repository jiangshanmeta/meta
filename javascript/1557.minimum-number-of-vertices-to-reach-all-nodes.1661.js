/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    const canReachByOther = new Array(n).fill(false);
    for (let i = 0; i < edges.length; i++) {
        canReachByOther[edges[i][1]] = true;
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        if (!canReachByOther[i]) {
            result.push(i);
        }
    }
    return result;
};
