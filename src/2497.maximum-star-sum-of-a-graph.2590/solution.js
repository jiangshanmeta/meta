/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
    const N = vals.length;
    const graph = new Array(N);
    for (let i = 0; i < N; i++) {
        graph[i] = [];
    }
    for (const [a, b, ] of edges) {
        graph[a].push(vals[b]);
        graph[b].push(vals[a]);
    }
    return Math.max(...graph.map((stars, index) => {
        let result = vals[index];
        stars.sort((a, b) => b - a);
        for (let i = 0; i < Math.min(stars.length, k); i++) {
            if (stars[i] < 0) {
                break;
            }
            result += stars[i];
        }
        return result;
    }));
};
