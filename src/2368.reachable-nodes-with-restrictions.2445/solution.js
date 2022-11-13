/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const [a, b, ] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    const restrictedSet = new Set(restricted);
    const visited = new Set();
    const dfs = (v) => {
        if (restrictedSet.has(v)) {
            return;
        }
        visited.add(v);
        for (const nextV of graph[v]) {
            if (!visited.has(nextV)) {
                dfs(nextV);
            }
        }
    };
    dfs(0);

    return visited.size;
};
