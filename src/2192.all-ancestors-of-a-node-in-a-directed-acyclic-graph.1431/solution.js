/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [from, to, ] of edges) {
        graph[to].push(from);
    }
    const result = new Array(n);
    const dfs = (v) => {
        if (result[v]) {
            return result[v];
        }
        const parents = [];
        for (const nextV of graph[v]) {
            parents.push(nextV);
            parents.push(...dfs(nextV));
        }
        result[v] = [...new Set(parents), ].sort((a, b) => a - b);
        return result[v];
    };
    for (let i = 0; i < n; i++) {
        result[i] = dfs(i);
    }

    return result;
};
