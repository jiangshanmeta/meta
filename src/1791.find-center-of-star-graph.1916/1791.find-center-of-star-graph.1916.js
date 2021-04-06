/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    const N = edges.length + 1;
    const counts = new Array(N + 1).fill(0);
    for (let i = 0; i < edges.length; i++) {
        const [a, b, ] = edges[i];
        counts[a]++;
        counts[b]++;
    }
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] === N - 1) {
            return i;
        }
    }
    return 0;
};
